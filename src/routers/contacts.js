import express from 'express';
import { 
  getContacts, 
  getContact, 
  createNewContact, 
  updateExistingContact, 
  deleteExistingContact 
} from '../controllers/contacts.js';
import isValidId from '../middlewares/isValidId.js'; 
import { validateBody, contactSchema } from '../validation/contactValidation.js';

const router = express.Router();

// Отримання всіх контактів
router.get('/', getContacts);

// Отримання конкретного контакту за ID
router.get('/:contactId', isValidId, getContact);

// Створення нового контакту
router.post('/', validateBody(contactSchema), createNewContact);

// Оновлення існуючого контакту за ID
router.patch('/:contactId', isValidId, validateBody(contactSchema), updateExistingContact);

// Видалення контакту за ID
router.delete('/:contactId', isValidId, deleteExistingContact);

export { router as contactsRouter };
