const fs = require("fs");

// Read input file into an array of strings
const input = fs.readFileSync("./part1test.txt", "utf-8").split("\n");

let total = 0;
let count = 0;

// iterate over each line
for (let i = 0; i < input.length; i++) {
  let firstDigit;
  let lastDigit;

  // iterate over each character in the line and check if it is a number
  for (let j = 0; j < input[i].length; j++) {
    if (Number.isInteger(parseInt(input[i][j]))) {
      if (firstDigit === undefined) {
        firstDigit = input[i][j];
      }
    }
  }

  // reverse iterate over each character in the line and check if it is a number
  for (let j = input[i].length - 1; j >= 0; j--) {
    if (Number.isInteger(parseInt(input[i][j]))) {
      if (lastDigit === undefined) {
        lastDigit = input[i][j];
      }
    }
  }

  // concatenate first and last digits and convert to number
  let num = parseInt(firstDigit + lastDigit);

  // add to total
  total += num;
}

console.log(total);
