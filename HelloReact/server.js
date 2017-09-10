//now you have access to express api
var express = require('express');

//create our app
var app = express();

//which folder to serve
//the folder name to expose to server.
app.use(express.static('public'));
app.listen(3000, function(){
  console.log("express server is up on port 3000"); 
});
