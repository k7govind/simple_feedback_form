import validator, { isEmpty, isAlpha } from 'validator';
export const validateForm = (req,res,next)=>{
    const formdata = req.body;
    var noEmptyFields = false;
    var validatedEmail = false;
    var ensureString = false;
    if(formdata != null && !isEmpty(formdata)) {
        const {firstname, lastname, useremail, userfeedback} = formdata;
        if(!isEmpty(firstname) && !isEmpty(lastname) && !isEmpty(useremail)) {
            noEmptyFields = true;
        }
        validatedEmail = validator.isEmail(useremail);
        if(isAlpha(firstname) && isAlpha(lastname)) {
            ensureString = true;
        }
        return (noEmptyFields && validatedEmail && ensureString) ? true : false;
    }
}