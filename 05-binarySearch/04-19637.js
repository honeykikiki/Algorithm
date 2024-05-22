const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
let powerList = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ");
  arr.push({ target: y, title: x });
}

for (let i = n + 1; i < n + m + 1; i++) powerList.push(+input[i]);

let result = "";
for (let i = 0; i < m; i++) {
  result += binarySearch(arr, powerList[i], 0, arr.length) + "\n";
}

console.log(result);

function binarySearch(arr, target, start, end) {
  let result = "";
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (target <= arr[mid].target) {
      result = arr[mid].title;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}
