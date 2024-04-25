const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0];

arr = arr.replace(/XXXX/g, "AAAA");
arr = arr.replace(/XX/g, "BB");

if (arr.includes("X")) console.log(-1);
else console.log(arr);
