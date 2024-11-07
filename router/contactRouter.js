import express from 'express';
import nodemailer from 'nodemailer';
import config from '../config.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('contact',{emailSent:false});
});

router.post('/',(req,res)=>{
    const formdata = req.body;
    if(formdata) {
        const {firstname, lastname, useremail, userfeedback} = formdata;
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
});

export default router;