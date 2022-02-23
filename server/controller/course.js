let express = require("express");
let router = express.Router();

let Course = require("../models/course");

module.exports.displayCourseList = (req, res, next) => {
  Course.find((err, courseList) => {
    if (err) {
      return console.error(err);
    } else {
      return res.json(courseList);
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
    console.log('resid inja ---  1')
    res.json({ success: true, msg: "Successfully display add page" });
  };

module.exports.processCourseAdd = (req, res, next) => {
    const body = req.body
    const newCourse = new Course(body)
    //Add new order object to the database
    Course.create(newCourse, (err, course) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.json({
          success: true,
          msg: "Successfully Added a New Course!" + course,
        });
      }
    });
  };
