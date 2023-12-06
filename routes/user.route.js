const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");

const router = express.Router();

// signup
router.post("/api/auth/register", createUser);

// login
router.post("/api/auth/login", loginUser);

// get all users
// get an user

module.exports = router;
