var http = require('http');
var custom = require('./mymodule');
var url = require('url');
var fs = require('fs');


var express = require('express');
var server = express();
var bodyParser = require('body-parser');
server.use(bodyParser.json);
server.use(bodyParser.urlencoded);


server.post("/datapass", function(req, res){
      let username = request.body.name;
      let userage = request.body.age;
      res.json({name:username, age:userage})
      });


http.createServer(function(req,res){
     // res.writeHead(500, {'Content-Type': 'text/html'});
     // res.write("Hello Client"); //response to Client

     // READ AND SPLIT THE QUERY STRING
      /*Use the url module to turn the querystring into an object:
      var q = url.parse(req.url, true).query;*/

      /*Return the year and month from the query object:
      var txt = q.year + " " + q.month;
      res.end(txt); //reponse end*/

      /*res.write(req.url);
      res.end();*/

      // FILE SYSTEM MODULE

      
      fs.readFile('demo.html', function(err, data){
            res.writeHead(200, {'Contett-Type':'text/html'});
            res.write(data);
            return res.end();
      });

      /*fs.writeFile('newfile.txt', 'Mydata', function(err){
            if(err) throw err;
            else console.log("Created");
      })*/







}).listen(8081);

console.log("Hello this is index.js");
console.log(custom.myDate());