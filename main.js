import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import contactRouter from './router/contactRouter.js';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/contact',contactRouter);

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});