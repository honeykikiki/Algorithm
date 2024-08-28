const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input[0];
let set = Array(26).fill(0);

for (let i = 0; i < string.length; i++) {
  let index = string[i].charCodeAt() - 97;
  set[index] += 1;
}

console.log(set.join(" "));
