import { saveUser, saveUserDatabase } from '../models/users.mjs';
import { sendEmail } from '../helpers/sendEmail.mjs';
export const displayContactForm = (req,res,next)=> {
    res.render('contact',{formResult:'NA'});
}
export const processContact = async(req,res,next)=> {

        const formdata = req.body;
        //var aa = req.formValidationResultObj.error;
        var result = false;
        var resultDatabase;
            if (!req.formValidationResultObj.error) {
              //const {firstname, lastname, useremail, userfeedback} = formdata;
              result = await saveUser(formdata);
              resultDatabase = await saveUserDatabase(formdata);
              const status = await sendEmail(formdata.useremail);
              if (status != null && Object.keys(status).length > 0) {
                switch (status.statusCode) {
                  case 250:
                    console.log("Email Sent");
                    break;
                  case 450:
                    console.log(
                      "Email Not sent. Please reach out to customer support team"
                    );
                    break;
                  default:
                    console.log(
                      "Wait for an Email, In case email not received, please reach out to customer support executive."
                    );
                }
              }
            }
            if(result === true) {
                res.status(200).render('contact',{formResult:'success'});
                console.log(resultDatabase);
            }
            else {
                res.status(404).render('contact',{formResult:'fail'});
                console.log(resultDatabase);
            }
        next();
}