var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body['repository']['default_branch']);
  res.end();
});

module.exports = router;
