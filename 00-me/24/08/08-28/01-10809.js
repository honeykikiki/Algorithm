const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input[0];
let answer = Array(26).fill(-1);
let num = 0;
for (let i = 0; i < string.length; i++) {
  let index = string[i].charCodeAt() - 97;

  if (answer[index] === -1) {
    answer[index] = num;
  }
  num++;
}

console.log(answer.join(" "));
