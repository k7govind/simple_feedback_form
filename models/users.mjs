import {handleFile} from '../helpers/handleFile.mjs';
export const saveUser = async (formdata)=>{
    let result = await handleFile(formdata);
    return result;
}