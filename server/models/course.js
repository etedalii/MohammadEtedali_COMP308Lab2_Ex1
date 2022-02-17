const mongoose = require("mongoose");

let Course = mongoose.Schema(
  {
    coursecode: {
      type: Number,
      default: "",
      trim: true,
      require: "Course code is required",
    },
    coursename: {
      type: String,
      default: "",
      trim: true,
      require: "course name is required",
    },
    section: {
      type: String,
      default: "",
    },
    semester: {
        type: String,
        default: "",
      },
  },
  {
    collection: "courses",
  }
);

module.exports.Course = mongoose.model('Course', Course);