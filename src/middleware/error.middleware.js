const errors = require('../helpers/httpStatus');

const errorHandlerMiddleware = ({ name, message }, _req, res, _next) => {
    const status = errors[name];
    if (!status) return res.sendStatus(500);
    res.status(status).json({ message });
  };

  module.exports = errorHandlerMiddleware;
