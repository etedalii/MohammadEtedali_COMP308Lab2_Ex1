
let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");
router.get("/", indexController.displayHomePage);


// /* Get Login Page for access to the website */
// router.get('/login', indexController.displayLoginPage)

// /* Get Login Page for access to the website */
// router.post('/login', indexController.processLoginPage)

// /* Get Login Page for access to the website */
// router.post('/signup', indexController.processRegisterPage)

// /* Get logout the user from the website */
// router.get('/logout', indexController.performLogout)


module.exports = router;