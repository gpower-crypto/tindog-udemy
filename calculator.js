const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
})); //bodyParser will parse or analyse the http request in line 15,16 and
//urlencoded will extract the values(form data) entered in form.

app.get("/", function(req, res) { //fet request is ment to get files from the server
  res.sendFile(__dirname + "/index.html");
}); //__dirname- used so thtat it doesn't matter where the server is, it will pend the index.html file and give its locatin.

app.post("/", function(req, res) { //http post request is when the browser posts/gives data to the server that the user has entered.
  //When the user posts anything, what function should take place.
  console.log(req.body);
  console.log(req.body);

  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);

  var result = number1 + number2;

  res.send("The result is:" + result);//display the message on the user's screen.
});

app.listen(3000, function() {
  console.log("server started on port 3000")//server is channeled to port 3000.
});
