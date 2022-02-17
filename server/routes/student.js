var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({success: true, msg: 'COMP 308 Mohammad Etedali 301056465 the time is: '+ Date.now().toLocaleString()})
});

module.exports = router;