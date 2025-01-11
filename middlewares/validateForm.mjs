import validator from 'validator';
export const validateForm = (req,res,next)=>{
    const formdata = req.body;
    var noEmptyFields = false;
    var validatedEmail = false;
    var ensureString = false;
    if(formdata != null && !validator.isEmpty(formdata)) {
        const {firstname, lastname, useremail, userfeedback} = formdata;
        if(!validator.isEmpty(firstname) && !validator.isEmpty(lastname) && !validator.isEmpty(useremail)) {
            noEmptyFields = true;
        }
        validatedEmail = validator.isEmail(useremail);
        if(validator.isAlpha(firstname) && validator.isAlpha(lastname)) {
            ensureString = true;
        }
        return (noEmptyFields && validatedEmail && ensureString) ? true : false;
    }
}