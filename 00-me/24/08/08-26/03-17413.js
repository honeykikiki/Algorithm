const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input[0];
let answer = "";
let stack = [];
for (let i = 0; i < string.length; i++) {
  let str = string[i];

  if (str == "<") {
    while (stack.length) {
      answer += stack.pop();
    }

    // answer += str;
    for (; i < string.length; i++) {
      answer += string[i];
      if (string[i] == ">") break;
    }
  } else if (str == " ") {
    while (stack.length) {
      answer += stack.pop();
    }

    answer += " ";
  } else {
    stack.push(str);
  }
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
