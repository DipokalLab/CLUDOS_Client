var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var path = require('path')
//var apps = require('./apps/apps');
var fs = require("fs");
var multer = require('multer');
var path = require('path');
var bodyParser = require('body-parser');
var ip = require("ip");

// 접속 Passcode
var passcode = "0101";

// 파일 디렉토리
var dirc = 'files';

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', function(req,res){
  if (req.body.passcode == passcode) {
    console.log("CLUDOS Client: 사용자 접속", req.body.user_id);
    var files = fs.readdirSync(dirc);

    res.send(files);
  }
});

app.get('/', function(req,res){
  res.send(String(ip.address()));
  
});



server.listen(3008, 'localhost', function() {
  console.log('CLUDOS Client: 0.0.1 >> Server listen on port ' + server.address().port);
  console.log('CLUDOS Client: Start >> 클루도스 클라이언트 프로젝트에 오신것을 환영합니다.');
});
