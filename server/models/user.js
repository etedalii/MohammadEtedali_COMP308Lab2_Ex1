const mongoose = require("mongoose");
let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: '',
      trim: true,
      require: "username is required",
    },
    password: {
      type: String,
      default: "",
      trim: true,
      require: "password is required",
    },
    email: {
        type: String,
        default: '',
        trim: true,
        require: "email is required",
      }
  },
  {
    collection: "users",
  }
);

//Configure option for user model
let options = ({
    missingPasswordError: 'Wrong / Missing Password'
})

module.exports.User = mongoose.model('User', User);