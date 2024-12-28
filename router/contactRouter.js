import express from 'express';
import {processContact,displayContactForm} from '../controllers/contactController.mjs';
const router = express.Router();

router.get('/',displayContactForm);

router.post('/',processContact);

export default router;