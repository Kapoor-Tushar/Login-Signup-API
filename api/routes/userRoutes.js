// This file will define where the user will be routed when they hit /api/v1/users this route.
// Importing required files.
const express = require("express");
const userController = require("../controller/userController");

// Creating router.
const router = express.Router();

// Mounting router with specific path.
router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);

// Exporting router
module.exports = router;
