//Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors

// validation.js

const { check } = require("express-validator"); // requiring express validation to validate information
exports.signupValidation = [
  //an array set up with instructions to check Validity for signing up
  check("name", "Name is requied").not().isEmpty(),
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
exports.loginValidation = [
  //checks validity for logging in
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];

//Server.js file
//creating the server for using the Express framework
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { signupValidation, loginValidation } = require("./validation.js");
const app = express();
//put the information in the form of a json file.
app.use(express.json());
//bodyParser is a tool used in NodeJs to grab data from requests
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
//setting up an endpoint
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
//setting up an endpoint
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error"; // a default error message will appear
  res.status(err.statusCode).json({
    message: err.message, //the error message is returned
  });
});

//starts up a server and listens for the specific port
app.listen(3000, () => console.log("Server is running on port 3000"));

//The code creates a server that is listening for requests
//If the information that is checked is correct it will be connected if there is an error then it will throw and error and export the information back
