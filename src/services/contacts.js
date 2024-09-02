import { Contact } from '../models/contact.js';
import mongoose from 'mongoose';
import createError from 'http-errors';

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createError(400, 'Invalid ID format');
  }
  const contact = await Contact.findById(id);
  if (!contact) {
    throw createError(404, 'Contact not found');
  }
  return contact;
};

export const createContact = async (contactData) => {
  return await Contact.create(contactData);
};

export const updateContact = async (id, contactData) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createError(400, 'Invalid ID format');
  }
  const updatedContact = await Contact.findByIdAndUpdate(id, contactData, { new: true });
  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }
  return updatedContact;
};

export const deleteContact = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createError(400, 'Invalid ID format');
  }
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    throw createError(404, 'Contact not found');
  }
  return deletedContact;
};
