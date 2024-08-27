const errorHandler = (err, req, res, next) => {
  console.log('Error handler triggered:', err);
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).json({
    status,
    message,
    data: null,
  });
};

<<<<<<< HEAD
export { errorHandler }; 
=======
export { errorHandler }; // Додаємо цей рядок, щоб експортувати функцію
>>>>>>> f58b1caf67bf856c0a701fb261a56f8c0d5b854b



