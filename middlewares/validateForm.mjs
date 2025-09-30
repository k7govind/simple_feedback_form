import Joi from 'joi';
export const validateForm = (req,res,next)=>{
    //const formdata = req.body;
    //const { firstname, lastname, useremail, userfeedback } = formdata;
    const schema = Joi.object({
        firstname : Joi.string().min(3).max(255).required().trim(),
        lastname : Joi.string().min(1).max(255).required().trim(),
        useremail : Joi.string().email().required().trim(),
        userfeedback : Joi.string().min(5)
    });
    const {error, value} = schema.validate(req.body);
    req.formValidationResultObj = {error, value};
    next();
}