import {saveUser} from '../models/users.mjs';
export const displayContactForm = (req,res,next)=> {
    res.render('contact',{emailSent:false});
}
export const processContact = async(req,res,next)=> {
        const formdata = req.body;
        if(formdata) {
            //const {firstname, lastname, useremail, userfeedback} = formdata;
            try {
                const result = await saveUser(formdata);
            } catch(e) {
                console.log(e);
            }
        }
        res.status(200);
        next();
}