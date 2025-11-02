import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.zoho.in',
  port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587,
  secure: process.env.MAIL_SECURE === 'true', // use false for port 587
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false // helps avoid certificate rejection on Render
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
    console.error('❌ Failed to send email:', error);
    return false;
  }
}

export async function verifyMailConnection() {
  try {
    await transporter.verify();
    console.log(`✅ Zoho Mail service is ready and authenticated`);
    return true;
  } catch (error) {
    console.error('❌ Zoho Mail service configuration error:', error);
    console.log('Make sure your MAIL_ID and APP_PASSWORD are correct.');
    console.log('For Zoho Mail, use an app-specific password generated in Zoho.');
    return false;
  }
}
