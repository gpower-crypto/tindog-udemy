const express = require("express");
const app = express();
const https = require("https");
const bodyParser= require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var cityName= req.body.city;

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6274c73f80fc04fdaca44b055b07b44f&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData=JSON.parse(data);

      const temp= weatherData.main.temp;
      const weatherDescription= weatherData.weather[0].description;
      const icon= weatherData.weather[0].icon;

      const iconUrl=  "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather in " + cityName + " is " + weatherDescription +"</p>");
      res.write("<h1>The temperature in " + cityName + " is " + temp + " degrees celcius. </h1>");
      res.write("<img src=" + iconUrl + ">");
      res.send();
    });
  });

});


app.listen(3000, function() {
  console.log("server started at port 3000");
});
