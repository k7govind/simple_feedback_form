import fs from 'fs';
import path from 'path';
import {sendEmail} from '../utils/sendEmail.mjs';
const filePath = path.join(path.resolve(),'files','userdetails.txt');
console.log(filePath);
export const handleFile = async function handleFile(formdata, sendEmail) {
    if(fs.existsSync(filePath)){
        fs.writeFile(filePath,JSON.stringify(formdata),(err)=>{
            if(err) throw err;
            console.log('User Data Saved!!');
        });
    }
    await sendEmail(formdata.useremail);
}