var express = require('express');
var router = express.Router();

/* GET todo listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a TODOS resource');
});

module.exports = router;
