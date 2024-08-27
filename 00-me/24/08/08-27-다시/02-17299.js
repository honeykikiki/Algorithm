const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = Number(input[0]);
let list = input[1].split(" ").map(Number);

let count = {};
for (let c in list) {
  if (!count[list[c]]) {
    count[list[c]] = 1;
  } else {
    count[list[c]]++;
  }
}

const stack = [];
const result = new Array(cnt).fill(-1);

for (let i = 0; i < cnt; i++) {
  while (
    stack.length > 0 &&
    count[list[i]] > count[list[stack[stack.length - 1]]]
  ) {
    result[stack.pop()] = list[i];
  }
  stack.push(i);
}

console.log(result.join(" "));
