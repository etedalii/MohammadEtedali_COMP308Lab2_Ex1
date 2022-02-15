const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");


// define the user model instance
let userModel = require("../models/user");
//create an alise
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    // res.render("index", {
    //   title: "Home",
    //   message:
    //     "Web development, especially freelance web development has been steadily growing as businesses are increasingly going online. Many talented developers offer freelance web development in addition to their day jobs or some of them have fully embraced the freelance life. Nevertheless, every web developer that wants to be successful needs to have their web developer portfolio on the internet where it can be accessed easily.",
    //   currentUser: req.user ? req.user.email : "",
    // });
    console.log('Home Page')
    return next()
  };
  