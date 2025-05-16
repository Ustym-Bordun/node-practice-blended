import { Router } from 'express';
import {
  createProductController,
  getProductController,
  getProductsController,
  updatePrductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.get('/products/:productId', ctrlWrapper(getProductController));

router.post('/products', ctrlWrapper(createProductController));

router.patch('/products/:productId', ctrlWrapper(updatePrductController));

export default router;
