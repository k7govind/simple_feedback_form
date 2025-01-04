import express from 'express';
import {requestTime} from '../middlewares/routerMiddleware.mjs';
import {processContact,displayContactForm} from '../controllers/contactController.mjs';
import { validateForm } from '../middlewares/validateForm.mjs';
const router = express.Router();

router.use(requestTime);
router.get('/',displayContactForm);
router.post('/',validateForm, processContact);

export default router;