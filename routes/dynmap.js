const express = require('express');
const router = express.Router();
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const server = 'http://24.91.3.150:8123/';
const views = path.join(__dirname + "/../views/");
const request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dynmap');
});
router.get('/dynmap.css', function (req, res){
    res.sendFile(path.join(views, "dynmap.css"));
});

//http://24.91.3.150:8123/
module.exports = router;
