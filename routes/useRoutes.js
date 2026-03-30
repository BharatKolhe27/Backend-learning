const express = require('express');
const router = express.Router();

const {
    getUsers,
    createUser,
    getProfile
} = require('../controllers/useController');

const authMiddleware = require('../middleware/authMiddleware');
const validateUser = require('../middleware/validateUser');

// Public route
router.get('/', getUsers);

// Protected route
router.get('/profile', authMiddleware, getProfile);

// Create user with validation
router.post('/', validateUser, createUser);

module.exports = router;    