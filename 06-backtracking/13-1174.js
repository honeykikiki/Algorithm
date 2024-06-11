const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let queue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers = [];
while (queue.length > 0) {
  const num = queue.shift();
  numbers.push(num);

  const lastDigit = num % 10;

  for (let i = 0; i < lastDigit; i++) {
    const nextNum = num * 10 + i;
    queue.push(nextNum);
  }
}

console.log(numbers[n - 1] ?? -1);
