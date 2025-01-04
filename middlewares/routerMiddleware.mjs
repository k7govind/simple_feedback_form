export const requestTime = (req,res,next)=> {
    let reqTime = new Date();
    console.log('Request Time: '+reqTime);
    next();
}