import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(path.resolve(),'files','userdetails.txt');
export const handleFile = async (formdata) => {
    const STRINGDATA = JSON.stringify(formdata);
    let isDataWritten = false;
    try {
        const fileExists = await fs.access(filePath)
            .then(() => true) // Resolves if the file exists
            .catch(() => false);
        if(fileExists){
            const fileStats = await fs.stat(filePath).size;
            if(fileStats == 0) {
                await fs.writeFile(filePath, STRINGDATA);
                isDataWritten = true;
                console.log('Data saved');
            } else {
                await fs.appendFile(filePath, STRINGDATA);
                isDataWritten = true;
                console.log('Data appended');
            }
        } else {
            console.log('File does not exist');
        }
        return isDataWritten;
    } catch (err) {
        console.log(err);
    }
}