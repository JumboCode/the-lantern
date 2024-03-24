import type { NextApiRequest, NextApiResponse } from 'next'
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from './email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    const {name, email, message} = req.body
    
    const transporter = nodemailer.createTransport({ 
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
    });

    // Email format
    const options = {
      from: 'lanternthinktank@gmail.com',
      to: 'lanternthinktank@gmail.com',
      subject: `Lantern Contact Form Response from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };
    
    const responseData = await transporter.sendMail(options)    
    res.status(200).json(responseData);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}