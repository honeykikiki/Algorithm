const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let selected = [];
// 집 과 치킨집 데이터 파싱
let 집 = []; // ex) [[1, 2], [2, 4], [3, 5]]
let 치킨집 = []; // ex) [[1, 2], [2, 4], [3, 5]]
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ");
  line.forEach((x, y) => {
    if (x == 1) 집.push([i, y + 1]);
    if (x == 2) 치킨집.push([i, y + 1]);
  });
}

let answer = 1e9;

function dfs(start) {
  if (selected.length === m) {
    let sum = 0;
    for (let i = 0; i < 집.length; i++) {
      const x = 집[i];
      let min = 1e9;
      for (let j = 0; j < selected.length; j++) {
        const y = selected[j];
        min = Math.min(min, chickenDist(x, y));
      }
      sum += min;
    }

    answer = Math.min(sum, answer);
    return;
  }

  for (let i = start; i < 치킨집.length; i++) {
    const [cX, cY] = 치킨집[i];
    selected.push([cX, cY]);
    dfs(i + 1);
    selected.pop();
  }
}

dfs(0);
console.log(answer);

function chickenDist(x, y) {
  let [x1, y1] = x;
  let [x2, y2] = y;

  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
