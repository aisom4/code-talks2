//Coding Problem 5
//What is happening in the code below? Why is this important? What would you use mySQL for?  Can you give an example?

// The code below is connecting to the SQL database. We choose which data base and supply username and passwords to access the information.
//This is important because we need to secure information behind our backend and databases so it is not accessible to everyone.
//We would use mySQL to store information like profile information for a social media website.

var mysql = require("mysql"); //requiring he sql database
var connection = mysql.createConnection({
  //creating a connection between a database and the server
  host: "localhost", //where the information is held
  user: "your username", //login info to get into the database
  password: "your password", //password to get into the database
  database: "your database name", //specific database being used
});

//initates connecting the database
connection.connect(function (error) {
  //error code incase an error does occur due to connecting
  if (!!error) {
    console.log(error); //reporting the error to the console.
  } else {
    console.log("Connected!:)"); //this occurs if there is no error
  }
});
module.exports = connection; //exporting the connection as a module
