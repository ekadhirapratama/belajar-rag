const responseTemplate = (req, res, next) => {
  res.success = (data, message = "Success") => {
      res.status(200).json({
          status: "success",
          message,
          data,
      });
  };

  res.error = (message = "Error", statusCode = 500, errors = null) => {
      res.status(statusCode).json({
          status: "error",
          message,
      });
  };

  next();
};

module.exports = responseTemplate;
