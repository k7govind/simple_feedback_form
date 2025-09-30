import { handleFile } from '../helpers/handleFile.mjs';
import { pool } from "../db.mjs";
export const saveUser = async (formdata)=>{
    let result = await handleFile(formdata);
    return result;
}

export const saveUserDatabase = async (formdata) => {
    const { firstname, lastname, useremail, userfeedback } = formdata;
    const [result] = await pool.execute(
      "INSERT INTO user_feedback_form (FIRSTNAME, LASTNAME, EMAIL, COMMENTS) VALUES (?, ?, ?, ?)",
      [firstname, lastname, useremail, userfeedback]
    );
    return { id: result.insertId, firstname, lastname, useremail, userfeedback };
};
