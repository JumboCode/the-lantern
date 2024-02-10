import type { NextApiRequest, NextApiResponse } from 'next'
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from './email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    // handlePostProfile(req, res);
    const {name, email, message} = req.body
    
    // from nodemailer website WE DONT K NOW WHAT THIS DO
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
    });
      
    const emailHtml = render(Email("hi!"));
    
    const options = {
      from: 'lanternthinktank@gmail.com',
      to: 'lanternthinktank@gmail.com',
      subject: 'lantern email test :D',
      text: `${name}, ${email}, ${message}`
      // html: data,
    };
    
    const responseData = await transporter.sendMail(options)    
    res.status(200).json(responseData);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}