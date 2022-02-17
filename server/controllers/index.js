const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
//enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// define the student model instance
let studentModel = require("../models/student");
//create an alise
let Student = studentModel.Student;

module.exports.displayHomePage = (req, res, next) => {
  res.json({
    success: true,
    msg:
      "COMP 308 Lab2 - Mohammad Etedali, the date is: " +
      Date.now().toLocaleString(),
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  //check that if Student already login or not
  if (!req.student) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      email: req.student ? req.student.username : "",
    });
  } else {
    res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    //If get server error
    if (err) {
      return next(err);
    }
    // is there a user login error
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.json({ success: false, msg: "Authentication Error" });
    }
    //Now user can login
    req.login(user, (err) => {
      //check is there server error
      if (err) {
        return next(err);
      }

      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email,
      };

      const authToken = jwt.sign(payload, DB.Secret, { expiresIn: "1d" });
      return res.json({
        success: true,
        msg: "User logged in Successfully",
        user: {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          userType: user.userType,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        },
        token: authToken,
      });
    });
  })(req, res, next);
};

module.exports.processRegisterPage = (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    userType: false, // because I want to be sure create staundard user
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error, Inserting a new User");
      if (err.name === "UserExistsError") {
        return res.json({
          success: false,
          msg: "Register Error, User Already exist",
        });
      }
      return next(err);
    } else {
      return res.json({ success: true, msg: "User Register Successfully" });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({ success: true, msg: "User Successfully Logged out" });
};
