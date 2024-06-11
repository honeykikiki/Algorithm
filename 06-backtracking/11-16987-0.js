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
  if (now == n - 1) {
    let cnt = 0;
    for (const [s, w] of arr) {
      if (s <= 0) cnt++;
    }

    answer = Math.max(answer, cnt);
    return;
  }

  let flag = true;
  for (let next = 0; next < n; next++) {
    if (now == next) continue;
    if (arr[now][0] <= 0 || arr[next][0] <= 0) continue;
    flag = false;
    // 계란 꺠기
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
