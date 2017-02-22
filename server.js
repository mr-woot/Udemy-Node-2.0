var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

// Connect to MongoDb database
mongoose.connect("mongodb://root:abc123@ds157479.mlab.com:57479/ecommerce", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
})

// Middlewares
app.use(morgan("dev"));


// Routes
app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.get("/name", (req, res) => {
    var name = "Tushar";
    res.json(`My name is ${name}`);
});

// Server
app.listen(3000, function(err) {
    if (err) throw err;
    console.log("Listening at port 3000");
});