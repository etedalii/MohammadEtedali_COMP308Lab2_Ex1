const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
let cors = require("cors");

//*************Authentication Section ****************** */
let session = require("express-session");
let passport = require("passport");

let passportJWT = require("passport-jwt");
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportlocal = require("passport-local");
let localStategy = passportlocal.Strategy;
let flash = require("connect-flash");
//************************************************ */

// database setup
let mongoose = require("mongoose");
let DB = require("./db");

// point mongoose to the DB URI
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("The program connected to MongoDB successfully...");
});

const indexRouter = require("../routes/index");
const studentRouter = require("../routes/student");
const courseRouter = require("../routes/course");
const app = express();

//*******************Setup express session */
app.use(
  session({
    secret: "mohammadSecret",
    saveUninitialized: false,
    resave: false,
  })
);

// ***********Initialize flash
app.use(flash());

//********** Initialize passport */
app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use(cors());

// ******** Passport user configuation ************/
//create a user model instance
let studentModel = require("../models/student");
let Student = studentModel.Student;

//Serialize and Deserialize user info
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());
passport.use(Student.createStrategy());

// For JWT ----------------------------------------

let jwtOptions = {};
//check that logged in or not
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = DB.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  Student.findById(jwt_payload.id)
    .then((student) => {
      return done(null, student);
    })
    .catch((err) => {
      return done(err, false);
    });
});

passport.use(strategy);

//-----------------END JWT

// routing
//add api for upload to cloud
app.use("/api", indexRouter);
app.use("/api/student", studentRouter);
app.use("/api/course", courseRouter);
//If does not find any other then respond to below path
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;