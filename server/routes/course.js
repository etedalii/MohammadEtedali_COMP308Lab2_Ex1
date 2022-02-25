var express = require('express');
var router = express.Router();
let courseCtrl = require('../controller/course');

/* Get List -- Read operation */
router.get("/", courseCtrl.displayCourseList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', courseCtrl.displayAddPage);

/* POST route for proccessing the add page  */
router.post('/add', courseCtrl.processCourseAdd);

router.get('/getone/:id', courseCtrl.getById);
/* POST request for proccessing the edit page  */
//router.post('/edit/:id', passport.authenticate('jwt', {session: false})
router.put('/edit/:id', courseCtrl.processEditPage);

/* Get request - perform delete action */
//router.delete('/delete/:id', passport.authenticate('jwt', {session: false})
router.delete('/delete/:id', courseCtrl.performDelete);

module.exports = router;