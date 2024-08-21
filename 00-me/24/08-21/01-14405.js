const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = input[0];
let list = ["pi", "ka", "chu"];

/**
 * 1. list에 단어가 연속적으로 들어가 있으면 YES
 * 2. list에 단어가 연속적으로 들어가 있지 않으면 NO
 */

const s = S.split("").reduce((cur, acc) => {
  let item = cur + acc;

  if (list.includes(item)) {
    return "";
  } else {
    return item;
  }
}, "");

if (s == "") console.log("YES");
else console.log("NO");
