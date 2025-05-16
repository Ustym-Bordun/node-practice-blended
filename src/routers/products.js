import { Router } from 'express';
import { getProductsController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

export default router;
