import 'dotenv/config';
import express from 'express';
import { verifyMailConnection } from './utils/mail.js';
import { initializeSubscriber } from './redis/redis_init.js';

const app = express();
const PORT = process.env.PORT || 4000;

// 🩺 Health check route for Render
app.get('/', (req, res) => res.send('Mail service active ✅'));
app.get('/healthz', (req, res) => res.status(200).send('OK'));

const startServer = async () => {
  try {
    const emailReady = await verifyMailConnection();
    if (!emailReady) console.warn('⚠️ Email service failed to initialize');

    const subscriberReady = await initializeSubscriber();
    if (!subscriberReady) console.warn('⚠️ Redis subscriber failed to initialize');

    console.log('✅ Mail service initialized (with possible warnings)');
  } catch (error) {
    console.error('❌ Startup error:', error);
  }
};

// Always start server first so Render detects port
app.listen(PORT, () => console.log(`🌍 Listening on port ${PORT}`));
startServer();
