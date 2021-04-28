import User from '../models/user';
import jwt from 'jsonwebtoken';
import { COOKIE_SECRET } from '../config';

const THIRTY_DAYS = 1000*60*60*24*30

const getToken = (data) => {
    return jwt.sign({ data }, COOKIE_SECRET, { expiresIn: '30d' })
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound: any = await User.findOne({ email, password }) as any;
        const tokenCreated = Date.now();
        res.cookie("token", getToken({
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
export const setMe = (req, res) => {
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