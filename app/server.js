var express = require("express");
var path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  