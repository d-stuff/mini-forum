import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users'
import { verifyUser } from '../middlewares/verify-user'

const usersRouter = Router();


const verifyAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    } else { 
        res.status(401).json({error: "user not authorized"});
    }
}


usersRouter.get('/api/users', verifyUser , verifyAdmin, getUsers);
usersRouter.post('/api/users', verifyUser, verifyAdmin, createUser);
usersRouter.put('/api/users/:userId', verifyUser, verifyAdmin, updateUser);
usersRouter.delete('/api/users/:userId', verifyUser, verifyAdmin, deleteUser);

export default usersRouter;
