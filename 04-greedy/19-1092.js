const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let crane = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let m = Number(input[2]);
let box = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let boxMax = Math.max(...box);
let craneMax = Math.max(...crane);

if (craneMax < boxMax) {
  console.log(-1);
} else {
  let cnt = 0;

  while (box.length) {
    for (let i = 0; i < crane.length; i++) {
      for (let j = 0; j < box.length; j++) {
        if (crane[i] >= box[j]) {
          box.splice(j, 1);
          break;
        }
      }
    }

    cnt++;
  }

  console.log(cnt);
}
