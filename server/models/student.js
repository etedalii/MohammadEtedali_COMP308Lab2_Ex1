const mongoose = require("mongoose");

let Student = mongoose.Schema(
  {
    studentnumber: {
      type: Number,
      default: "",
      trim: true,
      require: "Student number is required",
    },
    password: {
      type: String,
      default: "",
      trim: true,
      require: "password is required",
    },
    firstname: {
      type: String,
      default: "",
      trim: true,
      require: "First name is required",
    },
    lastname: {
        type: String,
        default: "",
        trim: true,
        require: "Last name is required",
      },
      address: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      phonenumber: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      program: {
        type: String,
        default: "",
      },
  },
  {
    collection: "students",
  }
);

//Configure option for Student model
let options = ({
    missingPasswordError: 'Wrong / Missing Password'
})

module.exports.Student = mongoose.model('Student', Student);