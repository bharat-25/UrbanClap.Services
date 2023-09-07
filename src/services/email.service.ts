import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.My_Mail, 
    pass: process.env.My_Password, 
  },
  debug: true,
});

export const sendReminderEmail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: process.env.My_Mail,
      to,
      subject,
      text,
    });
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export const sendStylzedMail = async (to: string, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      html, // Use the 'html' parameter to send HTML content
    });
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}