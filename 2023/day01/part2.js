const fs = require("fs");

// read input from file into array of strings
const input = fs.readFileSync("./part1.txt", "utf8").split("\n");

const wordMap = {
  zero: "z0o",
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

let total = 0;

// iterate over each line
for (let i = 0; i < input.length; i++) {
  let firstDigit;
  let lastDigit;

  // if line contains a key from wordMap, replace all instances of that key with its value
  for (let key in wordMap) {
    if (input[i].includes(key)) {
      input[i] = input[i].replace(new RegExp(key, "g"), wordMap[key]);
    }
  }

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
