import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { userRegisterController } from '../controllers/users.js';
const router = Router();

router.post('/users/register', ctrlWrapper(userRegisterController));
export default router;
