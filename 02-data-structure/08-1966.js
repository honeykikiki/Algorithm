const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i < testCase * 2; i += 2) {
  let [n, m] = input[i].split(" ").map(Number);
  let arr = input[i + 1].split(" ").map(Number);
  let obj = [];
  for (let i = 0; i < n; i++) obj[i] = [i, arr[i]];

  let max = Math.max(...arr);
  let count = 0;
  while (true) {
    max = Math.max(...arr);
    let [found, value] = obj.shift();
    let number = arr.shift();

    if (max == value && found == m) {
      count++;
      console.log(count);
      break;
    } else if (max == value) {
      count++;
    } else {
      // 찾은게 아닌 경우 뒤로 보내기
      obj.push([found, value]);
      arr.push(number);
    }
  }
}
