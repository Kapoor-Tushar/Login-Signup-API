// This file will contain routes for viewing page.
// Importing required modules,
const express = require("express");
const viewController = require("../controller/viewController");

// Creating router
const router = express.Router();

// Mounting routes
router.route("/login").get(viewController.getLoginPage);
router.route("/signup").get(viewController.getSignupPage);

// Exporting router.
module.exports = router;
