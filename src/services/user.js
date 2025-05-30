import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { User } from '../db/models/user.js';

export const userRegisterService = async (payload) => {
  const isUser = await User.findOne({ email: payload.email });
  if (isUser) {
    throw createHttpError(409, 'Email is Use');
  }
  const hashPasword = await bcrypt.hash(payload.password, 10);
  return await User.create({ ...payload, password: hashPasword });
};
