import dotenv from 'dotenv';
dotenv.config();

const config = {
        PORT : process.env.PORT,
        EMAIL_USER_ID : process.env.EMAIL_USER_ID,
        EMAIL_PASSWORD : process.env.EMAIL_PASSWORD,
        EMAIL_SERVICE : process.env.EMAIL_SERVICE
}

export default config;