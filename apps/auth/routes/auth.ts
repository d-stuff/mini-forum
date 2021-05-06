import { Router } from 'express';
import { login, logout, register, updatePersonalInfo, getMe, changePassword } from '../controllers/auth'
import { verifyUser } from '../middlewares/verify-user'

const authRouter = Router();


authRouter.post('/api/login', login);
authRouter.post('/api/logout', verifyUser ,logout);
authRouter.post('/api/register', register);
authRouter.post('/api/me', verifyUser, updatePersonalInfo);
authRouter.get('/api/me', verifyUser, getMe);
authRouter.post('/api/change-password', verifyUser, changePassword);

export default authRouter;
