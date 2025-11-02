import 'dotenv/config';
import express from 'express';
import { verifyMailConnection } from './utils/mail.js';
import { initializeSubscriber } from './redis/redis_init.js';

const app = express();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    const emailReady = await verifyMailConnection();
    if (!emailReady) throw new Error('Email service failed to initialize');

    const subscriberReady = await initializeSubscriber();
    if (!subscriberReady) throw new Error('Redis subscriber failed to initialize');

    console.log('✅ Mail service is running and listening for events');

    // 🩺 Health route for Render
    app.get('/', (req, res) => res.send('Mail service active ✅'));

    app.listen(PORT, () => console.log(`🌍 Listening on port ${PORT}`));
  } catch (error) {
    console.error('❌ Server startup error:', error);
    process.exit(1);
  }
};

startServer();
