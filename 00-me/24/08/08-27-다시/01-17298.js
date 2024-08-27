const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let list = input[1].split(" ").map(Number);

let stack = [];
for (let i = 0; i < n; i++) {
  while (stack.length && list[stack[stack.length - 1]] < list[i]) {
    list[stack.pop()] = list[i];
  }
  stack.push(i);
}

while (stack.length) {
  list[stack.pop()] = -1;
}

console.log(list.join(" "));
