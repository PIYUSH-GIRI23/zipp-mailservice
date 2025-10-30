import Redis from 'ioredis';
import 'dotenv/config';
import { sendMail } from '../utils/mail.js';
import {
    getWelcomeEmailBody,
    getLoginNotificationBody,
    getPasswordUpdateBody,
    getUsernameUpdateBody,
    getPinUpdateBody,
    getAccountDeleteBody,
    getOTPEmailBody
} from '../utils/mailbody.js';

// Event types
const EVENT_TYPES = {
    SIGNUP: 'user:signup',
    LOGIN: 'user:login',
    PASSWORD_UPDATE: 'user:password:update',
    USERNAME_UPDATE: 'user:username:update',
    PIN_UPDATE: 'user:pin:update',
    ACCOUNT_DELETE: 'user:account:delete',
    OTP_GENERATED: 'user:otp:generated'
};

// Create Redis subscriber
const subscriber = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD || undefined
});

// Event handlers for different types of events
const eventHandlers = {
    [EVENT_TYPES.SIGNUP]: async (data) => {
        const { email, name, createdAt, createdAtISO, deviceInfo } = data;
        const { subject, html } = getWelcomeEmailBody(createdAtISO, name, deviceInfo);
        await sendMail(email, subject, html);
    },

    [EVENT_TYPES.LOGIN]: async (data) => {
        const { email, name, loginAt, loginAtISO, deviceInfo } = data;
        const { subject, html } = getLoginNotificationBody(loginAtISO, name, deviceInfo);
        await sendMail(email, subject, html); // Uncommented to enable login emails
    },

    [EVENT_TYPES.PASSWORD_UPDATE]: async (data) => {
        const { email, updatedAtISO, deviceInfo ,name } = data;
        const { subject, html } = getPasswordUpdateBody(updatedAtISO, deviceInfo, name);
        await sendMail(email, subject, html);
    },

    [EVENT_TYPES.USERNAME_UPDATE]: async (data) => {
        const { email, oldUsername, newUsername, updatedAtISO, deviceInfo , name} = data;
        const { subject, html } = getUsernameUpdateBody(oldUsername, newUsername, updatedAtISO, deviceInfo, name);
        await sendMail(email, subject, html);
    },

    [EVENT_TYPES.PIN_UPDATE]: async (data) => {
        const { email, updatedAtISO, name, deviceInfo } = data;
        const { subject, html } = getPinUpdateBody(updatedAtISO, deviceInfo, name);
        await sendMail(email, subject, html);
    },

    [EVENT_TYPES.ACCOUNT_DELETE]: async (data) => {
        const { email, deletedAtISO, deviceInfo , name } = data;
        const { subject, html } = getAccountDeleteBody(email, deletedAtISO, deviceInfo, name);
        await sendMail(email, subject, html);
    },

    [EVENT_TYPES.OTP_GENERATED]: async (data) => {
        const { email, otp, expirySeconds , deviceInfo, generatedAtISO } = data;
        const { subject, html } = getOTPEmailBody(otp, expirySeconds, deviceInfo, generatedAtISO);
        await sendMail(email, subject, html);
    }
};

// Subscribe to all events
export async function initializeSubscriber() {
    try {
        // Subscribe to all event channels
        await subscriber.subscribe(...Object.values(EVENT_TYPES));
        console.log('✅ Subscribed to all event channels');

        // Listen for messages
        subscriber.on('message', async (channel, message) => {
            try {
                console.log(`📨 Received event on channel: ${channel}`);
                const data = JSON.parse(message);
                
                // Get and execute the appropriate handler
                const handler = eventHandlers[channel];
                if (handler) {
                    await handler(data);
                } else {
                    console.error(`No handler found for channel: ${channel}`);
                }
            } catch (error) {
                console.error('Error processing message:', error);
            }
        });

        return true;
    } catch (error) {
        console.error('Failed to initialize subscriber:', error);
        return false;
    }
}

process.on('SIGINT', async () => {
    console.log('Closing Redis subscriber...');
    await subscriber.quit();
    process.exit();
});
