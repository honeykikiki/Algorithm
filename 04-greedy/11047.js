const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  let [length, ...arr] = input;
  let amount = +length.split(" ")[1];
  for (let i = 0; i < arr.length; i++) arr[i] = +arr[i];

  let cnt = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    cnt += parseInt(amount / arr[i]);
    amount %= arr[i];
  }
  console.log(cnt);
}

// 내 풀이 -----------------------
// function solution(input) {
//   // Write your code
//   let [length, ...arr] = input;
//   let coin = createNumberObject(arr);
//   let value = +length.split(' ')[1];
//   let count = 0;

//   for (let i = +length.split(' ')[0] - 1; i >= 0; i--) {
//     const element = coin[i];

//     count += parseInt(value / element);
//     value -= parseInt(value / element) * element;
//   }

//   console.log(count);
// }

// function createNumberObject(arr) {
//   const numberObject = {};

//   for (let i = 0; i < arr.length; i++) {
//     const element = +arr[i];
//     numberObject[i] = element;
//   }

//   return numberObject;
// }
