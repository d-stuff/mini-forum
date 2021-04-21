import Post from '../models/post';


export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch {
        res.status(500).json({ message: "Could not load posts" })
    }
}

export const createPost = async (req, res) => {
    try {
        const { _id } = req.user;
        const { title, content } = req.body;
    
        const newPost = await Post.create({ title, content, user: _id });
        res.json(newPost);
    } catch {
        res.status(500).json({ message: "Could not create post" })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const _id = req.params.postId;
        const updatedPost = await Post.updateOne({ _id, user: req.user._id }, { $set: { title, content } });
        res.json(updatedPost);
    } catch {
        res.status(500).json({ message: "Could not update post" })
    }
}

export const deletePost = async (req, res) => {
    try {
        const _id = req.params.postId;
        const deletedPost = await Post.deleteOne({ _id, user: req.user._id });
        res.json(deletedPost);
    } catch {
        res.status(500).json({ message: "Could not delete post" })
    }
}

