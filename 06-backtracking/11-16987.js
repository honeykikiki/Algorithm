const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let answer = 0;

function dfs(now) {
  if (now == n) {
    let cnt = 0;
    // console.log(...arr);
    for (const [s, w] of arr) {
      if (s <= 0) cnt++;
    }

    answer = Math.max(answer, cnt);
    return;
  }

  let flag = true;
  for (let next = 0; next < n; next++) {
    // 중복인 경우
    if (now == next) continue;
    if (arr[now][0] <= 0 || arr[next][0] <= 0) continue;
    flag = false;
    arr[now][0] = arr[now][0] - arr[next][1];
    arr[next][0] = arr[next][0] - arr[now][1];
    dfs(now + 1);
    arr[now][0] = arr[now][0] + arr[next][1];
    arr[next][0] = arr[next][0] + arr[now][1];
  }
  if (flag) dfs(now + 1);
}

dfs(0);
console.log(answer);
