var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var payload = JSON.parse(req.body);
  console.log(payload)
  res.end();
});

module.exports = router;
