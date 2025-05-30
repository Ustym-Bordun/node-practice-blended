import Joi from 'joi';
export const productSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  price: Joi.number().required(),
  category: Joi.string()
    .required()
    .valid('books', 'electronics', 'clothing', 'other'),
  onDuty: Joi.boolean(),
});
