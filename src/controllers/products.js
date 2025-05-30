import createHttpError from 'http-errors';
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../services/products.js';

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

export const createProductController = async (req, res, next) => {
  const data = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data,
  });
};

export const updatePrductController = async (req, res) => {
  const { productId } = req.params;
  const data = await updateProduct(productId, req.body);

  if (data === null) {
    throw createHttpError(404, 'Product not found');
  }

  res
    .status(200)
    .json({ status: 201, message: 'Successfully patched a product!', data });
};
