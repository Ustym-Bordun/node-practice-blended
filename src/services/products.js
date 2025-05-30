import { Product } from '../db/models/products.js';

export const getProducts = async (filter) => {
  const productQuery = Product.find();
  console.log(productQuery);

  if (filter.category) {
    productQuery.where('category').equals(filter.category);
  }
  if (filter.minPrice) {
    productQuery.where('price').gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productQuery.where('price').lte(filter.maxPrice);
  }

  return productQuery;
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
