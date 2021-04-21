import { Router } from 'express';
import { getComments, createComment, updateComment, deleteComment } from '../controllers/comments'

const commentsRouter = Router();

const verifyUser = (req, res, next) => {
    req.user = { _id: "6080448d9d930c4c2ca1cb1c"};
    next();
}


commentsRouter.get('/api/comments', getComments);
commentsRouter.post('/api/comments', verifyUser, createComment);
commentsRouter.put('/api/comments/:commentId', verifyUser, updateComment);
commentsRouter.delete('/api/comments/:commentId', verifyUser, deleteComment);

export default commentsRouter;
