const express = require('express');
const router = express.Router();
const httpProxy = require('http-proxy');
const path = require('path');
const apiProxy = httpProxy.createProxyServer();
const server = 'http://24.91.3.150:8123/';
const views = path.join(__dirname + "/../views/");
const request = require('request');

router.get('/', function (req, res){
    console.log('works')
    apiProxy.web(req, res, {target: server});
});

module.exports = router;
