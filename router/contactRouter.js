import express from 'express';
import nodemailer from 'nodemailer';
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
            service: process.env.EMAIL_SERVICE,
            auth: {
              user: process.env.EMAIL_USER_ID,
              pass: process.env.EMAIL_PASSWORD
            }
          });
          //Email subject details
            const mailOptions = {
            from: process.env.EMAIL_USER_ID,
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