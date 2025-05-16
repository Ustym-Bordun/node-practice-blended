import { Product } from '../db/models/products.js';

export const getProducts = async () => {
  return await Product.find();
};
