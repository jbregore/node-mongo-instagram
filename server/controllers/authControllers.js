import Users from "../models/userModel.js";
import jwt from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60; // 3 days

const createToken = (id) => {
    return jwt.sign({ id }, "kosa", {
        expiresIn: maxAge,
    })
}

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await Users.register(username, password);
        const token = createToken(user._id);

        res.status(201).json({ user: user, created: true, token })
    } catch (e) {
        const msg = handleErrors(e);
        res.status(400).json({ msg, created: false });
    }
}

const handleErrors = (err) => {
    console.log(err)
    let errorMsg = "";

    if (err.message === "Incorrect username") {
        errorMsg = "That username is not registered";
        return errorMsg;
    }

    if (err.message === "Incorrect password") {
        errorMsg = "Password incorrect";
        return errorMsg;
    }

    if (err.message === "Username is already registered") {
        errorMsg = "Username is already registered";
        return errorMsg;
    }

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errorMsg).forEach(({ properties }) => {
            errorMsg[properties.path] = properties.message;
        })
    }

    return errorMsg;
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.login(username, password);
        const token = createToken(user._id);

        res.status(200).json({ user: user, isLoggedIn: true, token: token })
    } catch (e) {
        const msg = handleErrors(e);
        res.status(400).json({ msg, isLoggedIn: false });
    }
}   