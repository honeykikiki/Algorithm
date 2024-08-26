const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input[0];

let stack = [];
let answer = "";

for (let i = 0; i < string.length; i++) {
  let str = string[i];

  if (str == "(") {
    stack.push(str);
  } else if (str == ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.pop();
  } else if (str == "*" || str == "/") {
    while (
      (stack.length && stack[stack.length - 1] == "*") ||
      stack[stack.length - 1] == "/"
    ) {
      answer += stack.pop();
    }
    stack.push(str);
  } else if (str == "+" || str == "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.push(str);
  } else {
    answer += str;
  }
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
