const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split("");
let value = [];
for (let i = 2; i <= n + 1; i++) value.push(Number(input[i]));

const obj = {};
let start = 65;
for (const el of value) {
  obj[String.fromCharCode(start++)] = +el;
}

let stack = [];
function createOperation(operator) {
  // console.log(stack, operator);
  const back = stack.pop();
  const front = stack.pop();

  if (operator === "+") stack.push(front + back);
  if (operator === "-") stack.push(front - back);
  if (operator === "*") stack.push(front * back);
  if (operator === "/") stack.push(front / back);
}

let operation = ["+", "-", "*", "/"];

for (const el of arr) {
  if (operation.includes(el)) createOperation(el);
  else stack.push(obj[el]);
}

console.log(stack[0].toFixed(2));
