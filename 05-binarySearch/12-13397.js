const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr) - Math.min(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let count = 0;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < n; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);

    if (max - min > mid) {
      count++;
      asd = i;
      min = arr[i];
      max = arr[i];
    }
  }

  if (count < m) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);

/**
 * TODO
 * 1. 시작, 끝 값을 찾는다.
 * 2. 구분을 어떻게 할 지 정한다.
 * 3. 반복을 돌며 최소값을 찾는다.
 *
 */
