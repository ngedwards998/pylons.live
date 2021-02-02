const express = require('express');
const router = express.Router();
const path = require('path');
const views = path.join(__dirname + "/../views/");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/style.css', function (req, res) {
  res.sendFile(path.join(views, "style.css"));
});
router.get('/main.css', function (req, res){
  res.sendFile(path.join(views, "main.css"))
});
router.get('/background-image.jpg', function (req, res){
  res.sendFile(path.join(views, "background-image.jpg"))
});
router.get('/background-image-center.jpg', function (req, res){
  res.sendFile(path.join(views, "background-image-center.jpg"))
});
router.get('/background-image-center1.jpg', function (req, res){
  res.sendFile(path.join(views, "background-image-center1.jpg"))
});
router.get('/icon.ico', function (req, res){
  res.sendFile(path.join(views, 'icon.ico'))
});

module.exports = router;
