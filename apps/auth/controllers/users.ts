import User from '../models/user';


export const getUsers = async (req, res) => {
    try {
        const users = await User.find({ });
        res.json(users);
    } catch {
        res.status(500).json({ message: "Could not load Users" })
    }
}

export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await User.create({ email, password });
        res.json(newUser);
    } catch {
        res.status(500).json({ message: "Could not create User" })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { password } = req.body;
        const _id = req.params.userId;
        const updatedUser = await User.updateOne({ _id, email: req.user._id }, { $set: { password } });
        res.json(updatedUser);
    } catch {
        res.status(500).json({ message: "Could not update User" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const _id = req.params.userId;
        const deletedUser = await User.deleteOne({ _id, email: req.user._id });
        res.json(deletedUser);
    } catch {
        res.status(500).json({ message: "Could not delete user" })
    }
}

