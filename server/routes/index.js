var express = require('express');
var router = express.Router();
let indexController = require('../controller/index');


/* Get logout the user from the website */
router.get('/logout', indexController.performLogout)

module.exports = router;
