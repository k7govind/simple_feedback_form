import {handleFile} from '../helpers/handleFile.mjs';
export const saveUser = async (formdata)=>{
    await handleFile(formdata);
}