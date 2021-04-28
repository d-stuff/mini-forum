import { Router } from 'express';
import { login, logout, register, updatePersonalInfo, getMe, changePassword } from '../controllers/auth'

const authRouter = Router();


authRouter.post('/api/login', login);
authRouter.post('/api/logout', logout);
authRouter.post('/api/register', register);
authRouter.post('/api/me', updatePersonalInfo);
authRouter.get('/api/me', getMe);
authRouter.post('/api/change-password', changePassword);

export default authRouter;
