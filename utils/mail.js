import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.APP_PASSWORD
    }
});


export async function sendMail(to, subject, html) {
    try {
        const mailOptions = {
            from: `"Zipp Security" <${process.env.MAIL_ID || 'noreply@piyushx.tech'}>`,
            to,
            subject,
            html
        };

        await transporter.sendMail(mailOptions);
        console.log(`✉️ Email sent successfully to ${to}`);
        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
}

export async function verifyMailConnection() {
    try {
        await transporter.verify();
        console.log(`✅ Zoho Mail service is ready with domain piyushx.tech`);
        return true;
    } catch (error) {
        console.error('❌ Zoho Mail service configuration error:', error);
        console.log('Make sure you have set up correct MAIL_ID and APP_PASSWORD in your .env file');
        console.log('For Zoho Mail, you need to generate an app-specific password in your Zoho Mail account');
        return false;
    }
}