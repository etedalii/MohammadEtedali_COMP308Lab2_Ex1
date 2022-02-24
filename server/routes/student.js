var express = require('express');
var router = express.Router();
let studentCtrl = require('../controller/student');

/* Get List -- Read operation */
router.get("/", studentCtrl.displayStudentList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', studentCtrl.displayAddPage);

/* POST route for proccessing the add page  */
router.post('/add', studentCtrl.processStudentAdd);

router.get('/getone/:id', studentCtrl.getById);
/* POST request for proccessing the edit page  */
//router.post('/edit/:id', passport.authenticate('jwt', {session: false}), questionCtrl.processEditPage);
router.put('/edit/:id', studentCtrl.processEditPage);

/* Get request - perform delete action */
//router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), questionCtrl.performDelete);
router.delete('/delete/:id', studentCtrl.performDelete);

module.exports = router;