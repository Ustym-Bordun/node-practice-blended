import { Router } from 'express';
import {
  createProductController,
  getProductController,
  getProductsController,
  updatePrductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateId from '../middlewares/validId.js';
import validateBody from '../middlewares/validateBody.js';
import { productSchema } from '../validation/products.js';
const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.get(
  '/products/:productId',
  validateId,
  ctrlWrapper(getProductController),
);

router.post(
  '/products',
  validateBody(productSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/products/:productId',
  validateId,
  validateBody(productSchema),
  ctrlWrapper(updatePrductController),
);

export default router;
