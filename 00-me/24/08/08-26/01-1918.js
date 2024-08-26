const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ts = Number(input[0]);
let line = 1;

let stack = [];
let answer = "";

while (ts) {
  let str = input[line];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      while (stack.length) {
        answer += stack.pop();
      }
      answer += " ";
    } else {
      stack.push(str[i]);
    }
  }

  while (stack.length) {
    answer += stack.pop();
  }

  ts--;
  line++;
  answer += "\n";
}

console.log(answer);
