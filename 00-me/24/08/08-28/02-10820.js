const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let list = input[0].split(" ").map(Number);

console.log(+(list[0] + "" + list[1]) + +(list[2] + "" + list[3]));
