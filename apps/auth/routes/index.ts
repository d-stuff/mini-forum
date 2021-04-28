import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users'

const authRouter = Router();

const verifyUser = (req, res, next) => {
    req.user = { _id: "6080448d9d930c4c2ca1cb1c"};
    next();
}


authRouter.get('/api/auth', getUsers);
authRouter.post('/api/auth', verifyUser, createUser);
authRouter.put('/api/auth/:userId', verifyUser, updateUser);
authRouter.delete('/api/auth/:userId', verifyUser, deleteUser);

export default authRouter;
