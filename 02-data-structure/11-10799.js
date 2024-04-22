const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0].split("");

let answer = 0;
let stack = []; // 쇠 막대기

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (item === "(") {
    stack.push(item);
  } else {
    if (arr[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
      // console.log("레이저", answer);
    } else {
      stack.pop();
      answer++;
      // console.log("카운트", answer);
    }
  }
  // console.log(stack);
}

console.log(answer);
