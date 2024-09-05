import { body, validationResult } from 'express-validator';

// Валідація для реєстрації
export const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Валідація для логіну
export const validateLogin = [
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
