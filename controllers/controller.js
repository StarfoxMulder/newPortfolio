var express = require('express');
var router = express.Router();
var request = require("request");
var path = require('path');

///// Route to Landing Page \\\\\

router.get('/', function (req, res) {
   res.render('about');
});
router.get('/about', function (req, res) {
   res.render('about');
});

router.get('/interests', function (req, res) {
  res.render('interests');
});

router.get('/portfolio', function (req, res) {
  res.render('portfolio2');
});


module.exports = router;
