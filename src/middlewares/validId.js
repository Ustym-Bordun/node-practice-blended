import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export default function validateId(req, res, next) {
  const id = req.params.productId;
  if (isValidObjectId(id) !== true) {
    return next(createHttpError.BadRequest('Invalid id.'));
  }
  next();
}
