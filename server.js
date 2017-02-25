console.log("Starting server.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

var filteredArray = _.uniq([1,2,3,4,1,1,2,1,4,5,4,4,3,3]);
console.log(filteredArray);








 





























// var express = require("express");
// var morgan = require("morgan");
// var mongoose = require("mongoose");
// var bodyParser = require("body-parser");

// var User = require("./models/user");

// var app = express();

// // Connect to MongoDb database
// mongoose.connect("mongodb://root:abc123@ds157479.mlab.com:57479/ecommerce", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected to the database");
//     }
// })

// // Middlewares
// app.use(morgan("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.post("/createUser", (req, res) => {
//     var user = new User();
//     user.profile.name = req.body.name;
//     user.password = req.body.password;
//     user.email = req.body.email;
//     user.save((err) => {
//         if (err) next(err);
//         res.json("Successfully posted user details... :P");
//     });
// });

// // Routes
// app.get("/", (req, res) => {
//     res.sendStatus(200);
// });

// app.get("/name", (req, res) => {
//     var name = "Tushar";
//     res.json(`My name is ${name}`);
// });

// // Server
// app.listen(3000, function (err) {
//     if (err) throw err;
//     console.log("Listening at port 3000");
// });