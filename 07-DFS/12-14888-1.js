const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let graph = input[1].split(" ").map(Number);

for (const iterator of ["1", 2]) {
  console.log(iterator);
}
