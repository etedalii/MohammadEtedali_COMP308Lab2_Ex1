var express = require('express');
var router = express.Router();
let courseCtrl = require('../controller/course');


/* Get List -- Read operation */
router.get("/", courseCtrl.displayCourseList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', courseCtrl.displayAddPage);

/* POST route for proccessing the add page  */
router.post('/add', courseCtrl.processCourseAdd);

module.exports = router;