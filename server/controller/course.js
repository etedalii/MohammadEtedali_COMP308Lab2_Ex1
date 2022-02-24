let express = require("express");
let router = express.Router();

let Course = require("../models/course");

module.exports.displayCourseList = (req, res, next) => {
  Course.find((err, courseList) => {
    if (err) {
      return console.error(err);
    } else {
      return res.status(200).json(courseList);
    }
  });
};

module.exports.getById = (req, res, next) => {
  Course.findOne({ _id: req.params.id }, (err, course) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: course });
  }).catch((err) => console.log(err));
};

module.exports.displayAddPage = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Successfully display add page" });
};

module.exports.processCourseAdd = (req, res, next) => {
  const body = req.body;
  const newCourse = new Course(body);
  //Add new order object to the database
  Course.create(newCourse, (err, course) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.status(200).json({
        success: true,
        msg: "Successfully Added a New Course!" + course,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  const body = req.body;
  const updatedData = new Course(body);
  Course.updateOne({ _id: id }, updatedData, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.status(200).json({
        success: true,
        msg: "Successfully Edited Course!",
        question: updatedData,
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  console.log("00000000000000000000000000000000000000000000000000");
  Course.findOneAndDelete({ _id: req.params.id }, (err, course) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!course) {
      return res
        .status(404)
        .json({ success: false, error: `course not found` });
    }

    return res.status(200).json({ success: true, data: course });
  }).catch((err) => console.log(err));
};
