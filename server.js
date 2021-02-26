const express = require('express');

const app = express();
//when we receive a get request from the browser targeting the "/" route or "/"location then we respond with the callback function().
// when we go to page localhost:3000, then the browser is making a request to "/" this location.
app.get("/", function(req,res){
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res){
  res.send("<h1>Hello, my number is 63764774774</h1>");

} );

app.get("/about", function(req,res){
  res.send("<h1>Hello I am Mohan</h1>");
} );

app.get("/skills", function(req,res){
  res.send("<h1>logical skills</h1>");
} );

app.listen(3000, function(){console.log("server started on port 3000")});
