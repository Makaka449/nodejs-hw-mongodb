import express from 'express';
import { initMongoConnection } from './db/initMongoConnection.js';
import { contactsRouter } from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const setupServer = () => {
  const app = express();
  app.use(express.json());

  initMongoConnection(); // Инициализация подключения к MongoDB

  app.use('/contacts', contactsRouter); // Подключение роутера для контактов

  app.use(notFoundHandler); // Middleware для обработки несуществующих маршрутов

  app.use(errorHandler); // Middleware для обработки ошибок

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  return app;
};

export { setupServer };
