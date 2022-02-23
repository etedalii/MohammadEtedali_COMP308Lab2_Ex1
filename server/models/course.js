const mongoose = require("mongoose");

let Course = mongoose.Schema(
  {
    courseCode: {
      type: String,
    },
    courseName: {
      type: String,
    },
    section: {
      type: String,
    },
    semester: {
        type: String,
      },
  },
  {
    collection: "courses",
  }
);

module.exports = mongoose.model('Course', Course);