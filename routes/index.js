var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  console.log(req.body['ref'].split('/')[2]);
  res.end();
});

module.exports = router;
