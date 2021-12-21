
var express = require('express');
var server = express();
const bodyParser = require('body-parser');
var mysql = require('mysql');

var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password:"",
      database: "practice"
}); 

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());



server.post("/cryptonex/auth", function(req, res){

      
            let username = req.body.name;

      con.connect(function(err, res){
            if(err)  console.log(err);

            let verify = "SELECT * FROM nodetest WHERE name = '"+ username +"'";
            con.query(verify, function(err, result, feilds){
                  
                  if(result == '')
                  {
                        
                        let status = "false";
                        verified(status, username);

                  } 
                  else
                  {
                        console.log(result);
                        let status = "true";
                        verified(status, username);

                  }
                  
            })

            
      });

      function verified(status, userna)
      {
            if(status == "true")
            {
                  res.send('<script>alert("Data Exist");window.location.href="http://localhost:3000/"</script>');
            }
            else
            {
                  
                  let user = userna;

                  
                        let sql2 = "INSERT INTO nodetest VALUES('','" +user+ "', '')";
            
                        con.query(sql2, function(err,result){
                              if(err) throw err;
                              console.log(result);
                        });

                        res.send('<script>alert("Data Inserted");window.location.href="http://localhost:3000/"</script>');

            }
      }

});



server.listen(3001, function(){
      console.log("Listening to 3001");
});