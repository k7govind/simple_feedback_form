import nodemailer from 'nodemailer';
import config from '../config.js';

export const sendEmail = (useremail)=> {
    //Email Configurations
    const transporter = nodemailer.createTransport({
        service: config.EMAIL_USER_ID,
        auth: {
          user: config.EMAIL_USER_ID,
          pass: config.EMAIL_PASSWORD
        }
      });

      //Email options
        const mailOptions = {
        from: config.EMAIL_USER_ID,
        to: useremail,
        subject: 'Thanks for your feedback !!',
        text: 'Hello! Thanks for your feedback. We will check'
        };
    //Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        return console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
            res.render('contact',{emailSent: true}).status(200).end();
        }
    });
}