import { Product } from '../db/models/products.js';

export const getProducts = async () => {
  return await Product.find();
};

export const getProduct = async (productId) => {
  return await Product.findOne({
    _id: productId,
  });
};

export const createProduct = async (payload) => {
  return await Product.create(payload);
};

export const updateProduct = async (productId, payload) =>
  await Product.findOneAndUpdate({ _id: productId }, payload, { new: true });
