import express from 'express';
import morgan from 'morgan';
import {requestTime} from '../middlewares/routerMiddleware.mjs';
import {processContact,displayContactForm} from '../controllers/contactController.mjs';
import { validateForm } from '../middlewares/validateForm.mjs';
const router = express.Router();

//router.use(requestTime);
if(process.env.NODE_ENV === 'development') {
  router.use(morgan('tiny'));  
}
router.get('/',displayContactForm);
router.post('/',validateForm, processContact);

export default router;