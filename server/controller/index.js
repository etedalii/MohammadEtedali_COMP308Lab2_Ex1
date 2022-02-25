let express = require("express");
let router = express.Router();
const passport = require("passport");

//enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

let Student = require("../models/student");

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    //If get server error
    var result = Student.find(
      { email: req.body.username, password: req.body.password },
      (err, entity) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        if(entity.length === 0){
          return res.status(200).json({ success: false, error: 'Authentication error' });
        }
       
        const payload = {
          id: entity._id,
          firstname: entity.firstname,
          username: entity.username,
          email: entity.email,
        };

        const authToken = jwt.sign(payload, DB.Secret, { expiresIn: "1d" });
        return res.status(200).json({
          success: true,
          msg: "User logged in Successfully",
          user: {
            id: entity._id,
            firstname: entity.firstname,
            lastname: entity.lastname,
            username: entity.username,
            email: entity.email,
          },
          token: authToken,
        });
      }
    ).catch((err) => console.log(err));
  })(req, res, next);
 
};

module.exports.performLogout = (req, res, next) => {
  //req.logout();
  return res.status(200).json({ success: true, msg: "User Successfully Logged out" });
};
