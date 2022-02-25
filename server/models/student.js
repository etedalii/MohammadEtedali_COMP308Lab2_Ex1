const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let Student = mongoose.Schema(
  {
    studentnumber: {
      type: String,
    },
    password: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    email: {
      type: String,
    },
    program: {
      type: String,
    },
  },
  {
    collection: "students",
  }
);

Student.plugin(passportLocalMongoose);
module.exports = mongoose.model("Student", Student);
module.exports.Student = mongoose.model("Student", Student);