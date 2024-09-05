import express from 'express';
import { validateRegister, validateLogin } from '../middlewares/validate.js';  // Правильний імпорт
import { wrappedRegister, wrappedLogin, wrappedRefresh, wrappedLogout } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', validateRegister, wrappedRegister);  // Використання validateRegister
router.post('/login', validateLogin, wrappedLogin);           // Використання validateLogin
router.post('/refresh', wrappedRefresh);
router.post('/logout', wrappedLogout);

export { router as authRouter };
