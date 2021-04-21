import { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts"

const postsRouter = Router();

const verifyUser = (req, res, next) => {
    req.user = { _id: "6080448d9d930c4c2ca1cb1c"};
    next();
}


postsRouter.get('/api/posts', getPosts);
postsRouter.post('/api/posts', verifyUser, createPost);
postsRouter.put('/api/posts/:postId', verifyUser, updatePost);
postsRouter.delete('/api/posts/:postId', verifyUser, deletePost);

export default postsRouter;
