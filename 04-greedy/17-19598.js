const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let obj = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  obj.push({ time: x, start: 1 });
  obj.push({ time: y, start: -1 });
}

obj.sort((a, b) => {
  if (a.time == b.time) return a.start - b.start;
  else return a.time - b.time;
});

let answer = 0;
let schedule = 0;

for (let i = 0; i < obj.length; i++) {
  schedule += obj[i].start;

  answer = Math.max(answer, schedule);
}

console.log(answer);
