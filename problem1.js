const { readFileSync, writeFileSync } = require("fs"); //initates the fs

const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf8"); //a variable with a file location and a formatter
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second); // printing the first file info and the second file info to the console

writeFileSync(
  //writing a new file containing the inforamtion from the first and second text files
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

writeFileSync(
  //same thing as above
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //flagging
);
