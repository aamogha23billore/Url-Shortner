const express = require("express");
const { handleUserSignup, handleUserLogin, handleUserLogout } = require("../controllers/user");

const router = express.Router();

// Signup page
router.get("/signup", (req, res) => res.render("signup"));

// Login page
router.get("/login", (req, res) => res.render("login"));

// Signup form submit
router.post("/signup", handleUserSignup);

// Login form submit
router.post("/login", handleUserLogin);

// Logout
router.get("/logout", handleUserLogout);

module.exports = router;
