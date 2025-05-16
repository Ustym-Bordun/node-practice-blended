import express from 'express';
import cors from 'cors';

import { env } from './utils/env.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { Product } from './db/models/products.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  // app.use(productsRouter);
  app.get('/', async (req, res) => {
    const result = await Product.find();
    res.status(200).json({
      status: 200,
      data: result,
    });
  });
  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
