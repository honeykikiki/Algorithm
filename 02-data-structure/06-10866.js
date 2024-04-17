const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" "));
let deque = [];
let obj = {
  push_front: (val) => deque.unshift(val),
  push_back: (val) => deque.push(val),
  pop_front: () => deque.shift() || -1,
  pop_back: () => deque.pop() || -1,
  size: () => deque.length,
  empty: () => (deque.length === 0 ? 1 : 0),
  front: () => deque[0] || -1,
  back: () => deque[deque.length - 1] || -1,
};
let result = [];

for (let i = 0; i < n; i++) {
  const [a, b] = arr[i];
  if (b) {
    obj[a](b);
  } else {
    result.push(obj[a]());
  }
}

console.log(result.join("\n"));
