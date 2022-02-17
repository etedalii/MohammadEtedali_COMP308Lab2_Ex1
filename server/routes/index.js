var express = require('express');
var router = express.Router();
let indexController = require('../controller/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('inja')
  res.json({success: true, msg: 'COMP 308 Mohammad Etedali 301056465 the time is: '+ Date.now().toLocaleString()})
});

/* Get Login Page for access to the website */
router.get('/login', indexController.displayLoginPage)

/* Get Login Page for access to the website */
router.post('/login', indexController.processLoginPage)

/* Get Login Page for access to the website */
router.post('/signup', indexController.processRegisterPage)

/* Get logout the user from the website */
router.get('/logout', indexController.performLogout)

module.exports = router;
