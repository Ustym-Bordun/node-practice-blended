import { categoryList } from '../constants/index.js';

const parseCategory = (value) => {
  if (typeof value !== 'string') return;

  const isCategory = categoryList.includes(value);

  if (!isCategory) return;

  return value;
};

const parseNumber = (number) => {
  if (typeof number !== 'string') return;

  const parsedNumber = Number(number);

  if (Number.isNaN(parsedNumber)) return;

  return parsedNumber;
};

export const parseFilterParams = ({ category, minPrice, maxPrice }) => {
  const parsedCategory = parseCategory(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};
