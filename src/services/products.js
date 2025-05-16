import { Product } from '../db/models/products.js';

export const getProducts = async () => {
  return await Product.find();
};

export const getProduct = async (productId) => {
  return await Product.findOne({
    _id: productId,
  });
};
