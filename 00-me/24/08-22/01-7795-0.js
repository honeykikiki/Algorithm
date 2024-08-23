const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 먹을 것인가 먹힐 것인가
 * A > B 가 크면 A 가 B를 잡아 먹을 수 있다.
 */

let ts = Number(input[0]);
let line = 1;
let answer = "";

while (ts) {
  let [n, m] = input[line].split(" ").map(Number);
  let a = input[line + 1].split(" ").map(Number);
  let b = input[line + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let start = 0;
    let end = m;
    while (start + 1 < end) {
      let mid = parseInt((start + end) / 2);
      // console.log(start, end);

      if (a[i] > b[mid]) start = mid;
      else end = mid;
    }
    cnt += start;

    if (a[i] > b[start]) cnt++;
  }

  answer += cnt + "\n";
  line += 3;
  ts--;
}

console.log(answer);
