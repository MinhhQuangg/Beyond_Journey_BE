const AppError = require('./../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.keyValue.name;
  const message = `The email is already registered. Please register with another email or use forget password.`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).filter((el) => el.message);

  const messages = errors.map((el) => {
    if (el.message.includes('Path `password`')) {
      return 'Password is shorter than the minimum allowed length (8 characters).';
    }
    return el.message;
  });

  const message = `Invalid input data. ${messages.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = (err) =>
  new AppError('Invalid token. Please log in again', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token is expired. Please log in again', 401);

const sendErrorDev = (err, req, res) => {
  //A) API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  //B) Rendered website
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong',
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  // a)API
  if (req.originalUrl.startsWith('/api')) {
    if (err.isOperational) {
      // A)Operational, trusted error: send message to client
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });

      // B)Programming or other unknown error: don't leak error details
    }
    //1) Log Error
    console.error('Error:', err);

    //2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
  if (err.isOperational) {
    // console.log(err.message);
    //A) Operational, trusted error: send message to client
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong',
      msg: err.message,
    });

    //B) Programming or other unknown error: don't leak error details
  }
  //1) Log Error

  //2) Send generic message
  return res.status(500).json({
    status: 'error',
    msg: 'Pleasae try again later!',
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err, name: err.name };
    error.message = err.message;
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError')
      error = handleJWTExpiredError(error);
    sendErrorProd(error, req, res);
  }
};
