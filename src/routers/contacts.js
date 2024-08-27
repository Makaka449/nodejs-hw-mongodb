import express from 'express';
import { getContacts, getContact, createNewContact, updateExistingContact, deleteExistingContact } from '../controllers/contacts.js';
<<<<<<< HEAD
import isValidId from '../middlewares/isValidId.js'; 
import { validateBody, contactSchema } from '../validation/contactValidation.js';
=======
>>>>>>> f58b1caf67bf856c0a701fb261a56f8c0d5b854b

const router = express.Router();

router.get('/', getContacts);
<<<<<<< HEAD
router.get('/:contactId', isValidId, getContact); 
router.post('/', validateBody(contactSchema), createNewContact); 
router.patch('/:contactId', isValidId, validateBody(contactSchema), updateExistingContact); 
router.delete('/:contactId', isValidId, deleteExistingContact); 
=======
router.get('/:contactId', getContact);
router.post('/', createNewContact);
router.patch('/:contactId', updateExistingContact);
router.delete('/:contactId', deleteExistingContact);
>>>>>>> f58b1caf67bf856c0a701fb261a56f8c0d5b854b

export { router as contactsRouter };


<<<<<<< HEAD

=======
>>>>>>> f58b1caf67bf856c0a701fb261a56f8c0d5b854b
