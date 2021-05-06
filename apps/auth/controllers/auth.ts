import User from '../models/user';
import { signToken } from '../utils/tokens'

const THIRTY_DAYS = 1000*60*60*24*30



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound: any = await User.findOne({ email, password }) as any;
        const tokenCreated = Date.now();
        res.cookie("token", signToken({
            _id: userFound._id,
            name: userFound.firstName,
            role: userFound.role,
            tokenCreated
        }), {maxAge: THIRTY_DAYS})
        res.json({
            _id: userFound._id,
            name: userFound.firstName,
            role: userFound.role});
    } catch {
        res.status(500).json({ message: "Could not login" })
    }
}
export const register = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const newUser = await User.create({ email, password, firstName, lastName });
        res.json(newUser);
    } catch {
        res.status(500).json({ message: "Could not register" })
    }
}
export const getMe = (req, res) => {
    try {

    } catch {

    }
}

export const updatePersonalInfo = (req, res) => {
    try {

    } catch {

    }
}
export const changePassword = (req, res) => {
    try {

    } catch {

    }
}
export const logout = (req, res) => {
    try {

    } catch {

    }
}