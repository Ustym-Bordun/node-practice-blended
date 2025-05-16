import { getProducts } from '../services/products.js';

export const getProductsController = async (req, res, next) => {
  const products = await getProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};
