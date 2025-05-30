import createHttpError from 'http-errors';

export default function validateBody(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      const errors = error.details.map((el) => {
        return el.message;
      });
      next(createHttpError.BadRequest(errors));
    }
  };
}
