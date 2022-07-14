const errors = {
    ValidationError: 400,
    NotFoundError: 404,
    ConflictError: 409,
    UnauthorizedError: 401,
    InternalServerError: 500,
  };

  const errorHandlerMiddleware = ({ name, message }, _req, res, _next) => {
    const status = errors[name];
    if (!status) return res.sendStatus(500);
    res.status(status).json({ message });
  };

  module.exports = errorHandlerMiddleware;
