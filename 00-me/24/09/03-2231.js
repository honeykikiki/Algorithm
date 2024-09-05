const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let result = 0;

for (let i = 0; i <= n; i++) {
  let number = i;
  let sum = 0; // 각 자릿수 합 변수

  while (number != 0) {
    sum += number % 10; // 각 자릿수 더하기
    number = parseInt(number / 10);
  }

  // i 값과 각 자릿수 누적합이 같을 경우 (생성자를 찾았을 경우)

  if (sum + i == n) {
    result = i;
    break;
  }
}
console.log(result);
