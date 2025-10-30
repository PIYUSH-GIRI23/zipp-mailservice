import 'dotenv/config';
import { verifyMailConnection } from './utils/mail.js';
import { initializeSubscriber } from './redis/redis_init.js';

const startServer = async () => {
    try {
        // Verify email service connection
        const emailReady = await verifyMailConnection();
        if (!emailReady) {
            throw new Error('Email service failed to initialize');
        }

        // Initialize Redis subscriber
        const subscriberReady = await initializeSubscriber();
        if (!subscriberReady) {
            throw new Error('Redis subscriber failed to initialize');
        }

        console.log('✅ Mail service is running and listening for events');
    } catch (error) {
        console.error('❌ Server startup error:', error);
        process.exit(1);
    }
};

startServer();