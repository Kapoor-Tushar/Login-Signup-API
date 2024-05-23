// This file will contain the logic and function that the api will use.
// Importing required modules.
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

//Enabling signup functionality.
exports.signup = async function (req, res) {
  try {
    // Extracting the user data
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    // creating a jwt token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    //   Sending the response back to the user
    res.status(201).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "Signup Falied, Please check your Details.",
    });
  }
};

// Enabling login functionality
exports.login = async function (req, res) {
  try {
    // Accessing the user data i.e. email and password.
    const email = req.body.email;
    const password = req.body.password;

    //checking if the user has entered email and passowrd or not.
    if (!email || !password) {
      throw new Error("Please enter the email and password correctly.");
    }
    //   Extracting user details from database.
    const user = await User.findOne({ email: email }).select("+password");
    //   checking if the email and password of the user is correct
    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Incorrect email or password");
    }
    //If everything is ok, creating the token and sending it.
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};
