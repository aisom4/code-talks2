// Question 2

const { readFile, writeFile } = require("fs");
// asynchronously reading the entire file's contents. setting up the fileSystem and setting readFile and writeFile to it.

console.log("start"); //Indicating the beginning of the process.
readFile("./first.txt", "utf8", (err, result) => {
  //passing 3 different parameters a file, the character encoding, and a callback function labeled as result.
  //reading the information from the first text file.
  if (err) {
    //a conditional used in the case of a error resulting while reading the first file.
    console.log(err);
    return;
    //if an error occurs the code will stop signified by the return statement
  }
  const first = result; // creating a variable for the result of the first file's text.
  console.log(result);
  readFile("./second.txt", "utf8", (err, result) => {
    // this entire file is async so everything should be occuring simulataneously
    if (err) {
      console.log(err);
      //another conditional in case of an error for the second text file
      return;
    }
    const second = result;
    // creating a varible for the results of the second file
    console.log(result);
    writeFile(
      "./result-async.txt",
      `Here is the result : ${first}, ${second}`,
      //creating a new file with the result of adding the first and second variables using template literals. (Writing the results)
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task"); //once it is finished creating the file it will let us know it is complete
      }
    );
  });
});

console.log("starting next task"); // this code is occuring as soon as the first text file is read while the callback function is occuring
