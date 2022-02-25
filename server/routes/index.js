var express = require('express');
var router = express.Router();
let indexController = require('../controller/index');

router.post('/login', indexController.processLoginPage)

/* Get logout the user from the website */
router.post('/logout', indexController.performLogout)

module.exports = router;
