const User = require('../models/userModel');

let users = [];

const getUsers = (req, res) => {
    res.json({
        success: true,
        data: users
    });
};

const createUser = (req, res, next) => {
    try {
        const { name } = req.body;

        const newUser = new User(Date.now(), name);
        users.push(newUser);

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        });

    } catch (error) {
        next(error);
    }
};

const getProfile = (req, res) => {
    res.json({
        success: true,
        message: 'Protected route accessed',
        user: req.user
    });
};

module.exports = {
    getUsers,
    createUser,
    getProfile
};