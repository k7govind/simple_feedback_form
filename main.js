import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import  helmet  from 'helmet';
import contactRouter from './router/contactRouter.js';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
// Configure the Content-Security-Policy header.
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/bootstrap-css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css/')));
app.use('/bootstrap-js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/')));
app.use('/jquery', express.static(path.join(__dirname,'node_modules/jquery/dist/')));
app.use(
  "/jquery-validation",
  express.static(path.join(__dirname, "node_modules/jquery-validation/dist/"))
);

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/contact", contactRouter);

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});