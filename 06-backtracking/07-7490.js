const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);

let line = 1;
while (testCase--) {
  let n = Number(input[line]);

  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let selected = [];
  let answer = "";

  function dfs(arr, depth) {
    if (depth == n - 1) {
      let opers = "";
      for (let i = 0; i < n; i++) opers += arr[i] + (selected[i] ?? "");
      let result = eval(opers.split(" ").join(""));
      if (result == 0) answer += opers + "\n";
      return;
    }

    for (const x of [" ", "+", "-"]) {
      selected.push(x);
      dfs(arr, depth + 1);
      selected.pop();
    }
  }

  dfs(arr, 0);
  console.log(answer);

  line++;
}
