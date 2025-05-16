import mongoose from 'mongoose';
const productSchema = new mongoose.Shema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
    },
    description: { type: String, required: false },
  },
  { timestamps: true },
);

export const Product = mongoose.model('Product', productSchema); // collection name - products
