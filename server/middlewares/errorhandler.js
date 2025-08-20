const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode <= 200 ? 500 : res.statusCode

  // Set the status code and send the error message
  res.status(statusCode);
  
  // Log the error to the console for debugging
  console.error(err.stack);

  // Send the error response
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}

module.exports = errorHandler