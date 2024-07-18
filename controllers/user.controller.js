const User = require("../model/User.models");
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
    let data = await User.find();
    res.send(data);
}


const createUser = async (req, res) => {
    let { email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    let user = await User.findOne({ email: email });

    if (user) {
        res.send({ msg: "User already exists", user });
    } else {
        let data = await User.create(req.body);
        res.redirect("/user/login")
    }
}

const Login = async (req, res) => {

    let { email, password } = req.body;
    let user = await User.findOne({ email: email });

    if (!user) {
        return res.send({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.send({ msg: "Wrong password" });
    }
    else {
        res.redirect("/user/home");
    }
}

const deleteUser = async (req, res) => {
    let { id } = req.params;
    let user = await User.findByIdAndDelete(id);
    res.send({ msg: "User deleted successfully", user });
}

const updataUser = async (req, res) => {
    let { id } = req.params;
    let user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send({ msg: "User updated successfully", user });
}


const homePage = (req, res) => {
    res.render("index")
}
const signuoPage = (req, res) => {
    res.render("signup")
}

const loginPage = (req, res) => {
    res.render("login")
}

module.exports = { homePage, signuoPage, loginPage, createUser, Login, deleteUser, updataUser, getUsers }