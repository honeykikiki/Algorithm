const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let queue = [];
let answer = [];
for (let i = 1; i <= n; i++) queue.push(i);

let count = 1;
while (queue.length) {
  const shiftItem = queue.shift();
  if (count % k === 0) {
    answer.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  count++;
}

console.log("<" + answer.join(", ") + ">");
