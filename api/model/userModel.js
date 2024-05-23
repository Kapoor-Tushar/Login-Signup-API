// This file will contain our schema
// Importing required modules.
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// Creating user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please mention your email-id."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, "Please enter the password."],
    //Removing it from the output.
    select: false,
  },
  passwordConfirm: {
    type: String,
    minLength: 8,
    required: [true, "Please re-enter your password "],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});

// Creating a document middleware to encrypt our data as if someone tries to access the db he/she can't get to know about the password.
userSchema.pre("save", async function (next) {
  // Encrypting the password with bcrypt library
  // Hashing the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Deleting the passwordConfirm field, as it is only being used to check if the user has entered correct password of not while creating account.
  this.passwordConfirm = undefined;
  next();
});

// creating method on userSchema to check password during login.
userSchema.methods.correctPassword = async function (
  currentPassword,
  userPassword
) {
  return await bcrypt.compare(currentPassword, userPassword);
};

// Creating user model
const User = mongoose.model("User", userSchema);
module.exports = User;
