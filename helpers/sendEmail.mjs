import nodemailer from 'nodemailer';
import config from '../config.js';

export const sendEmail = async (useremail)=> {
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
    const emailResultInfo = await transporter.sendMail(mailOptions);
    let responseString = emailResultInfo.response.toString();
    var status = {};
        if(responseString.indexOf('OK') > 0) {
          status.statusCode = 250;
        } else {
          status.statusCode = 450;
        }
        return status;
}