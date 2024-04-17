const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);

// 1. 배열의 k 번쨰 값을 추출한다.
// 2. k - 1 번째 보다 앞에 있는 값 전부 뒤로 옮긴다.
// 3. 만약에 k 보다 길이가 짧으면 반복 해준다.

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
