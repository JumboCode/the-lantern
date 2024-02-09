import type { NextApiRequest, NextApiResponse } from 'next'
import {handlePostProfile, insertEvent, insertProfile} from '../../../../prisma/insert-data';
import { send } from 'process';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from './email';
import Contact from "../../../components/Contact";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    // handlePostProfile(req, res);
    const responseData = { message: 'profile: POST requested received' };
    const data = req.body;
    

    // from nodemailer website WE DONT K NOW WHAT THIS DO
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'lanternthinktank@gmail.com',
          pass: 'Password123!!',
        },
      });
      
      const emailHtml = render(Email("hi!"));
      
      const options = {
        from: 'lanternthinktank@gmail.com',
        to: 'halle.hau@tufts.edu',
        subject: 'lantern email test :D',
        html: data,
      };
      
        transporter.sendMail(options, function(err, info){
          if(err){
            console.log(err)
            return;
          }
         });
    // Nodemailer stuff
    
    res.status(200).json(responseData);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}