import { Router } from 'express';
import {
  createProductController,
  getProductController,
  getProductsController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.get('/products/:productId', ctrlWrapper(getProductController));

router.post('/products', ctrlWrapper(createProductController));

export default router;
