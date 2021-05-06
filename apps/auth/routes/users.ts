import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users'

const usersRouter = Router();

const verifyAdmin = (req, res, next) => {
    req.user = { _id: "6080448d9d930c4c2ca1cb1c"};
    next();
}


usersRouter.get('/api/users', verifyAdmin, getUsers);
usersRouter.post('/api/users', verifyAdmin, createUser);
usersRouter.put('/api/users/:userId', verifyAdmin, updateUser);
usersRouter.delete('/api/users/:userId', verifyAdmin, deleteUser);

export default usersRouter;
