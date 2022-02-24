let express = require("express");
let router = express.Router();

let Student = require("../models/student");

module.exports.displayStudentList = (req, res, next) => {
    Student.find((err, entities) => {
    if (err) {
        return res.status(400).json({ success: false, error: err });
    } else {
      return res.status(200).json(success: true, entities);
    }
  });
};

module.exports.getById = (req, res, next) => {
    Student.findOne({ _id: req.params.id }, (err, entity) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: entity });
  }).catch((err) => console.log(err));
};

module.exports.displayAddPage = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Successfully display add page" });
};

module.exports.processStudentAdd = (req, res, next) => {
  const body = req.body;
  const newStudent = new Student(body);
  Student.create(newStudent, (err, entity) => {
    if (err) {
        return res.status(400).json({ success: false, error: err });
    } else {
      res.status(200).json({success: true,data: entity,});
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  const body = req.body;
  const updatedData = new Student(body);
  Student.updateOne({ _id: id }, updatedData, (err) => {
    if (err) {
        return res.status(400).json({ success: false, error: err });
    } else {
      res.status(200).json({success: true, data: updatedData,});
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  Student.findOneAndDelete({ _id: req.params.id }, (err, entity) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!entity) {
      return res.status(404).json({ success: false, error: `entity not found` });
    }

    return res.status(200).json({ success: true, data: entity });
  }).catch((err) => console.log(err));
};