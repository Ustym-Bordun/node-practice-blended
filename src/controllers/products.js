import createHttpError from 'http-errors';
import { getProduct, getProducts } from '../services/products.js';

export const getProductsController = async (req, res, next) => {
  const products = await getProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductController = async (req, res) => {
  const { productId } = req.params;
  const result = await getProduct(productId);

  if (result === null) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: result,
  });
};
