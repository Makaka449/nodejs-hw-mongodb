import express from 'express';
import { loginUser } from '../controllers/auth.js';
import { validateLogin } from '../middlewares/validate.js';

const router = express.Router();

router.post('/login', validateLogin, loginUser);

export default router;
