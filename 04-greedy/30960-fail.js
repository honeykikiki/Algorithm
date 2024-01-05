const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [length, arr] = input;
  arr = arr
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  // console.log(arr);

  let result = 0;

  n = arr.length;
  console.log(n, arr);
  for (let i = 0; i < parseInt(n / 2); i++, i++) {
    if (length === 3) {
      // console.log(arr[i + 2], arr[n - i - 3]);
      let x = arr[i + 2] - arr[n - i - 3];
      result += x;
    } else if (parseInt(n / 2) - 2 <= i) {
      // 5개 일때 가운데 인경우
      let x = arr[i + 2] - arr[i];
      let y = arr[n - i - 1] - arr[n - i - 3];

      // console.log(x, y);
      if (x > y) {
        result += y;
        result += arr[i + 1] - arr[i];
        // console.log(arr[i], arr[i + 1]);
        // console.log(arr[n - i - 3], arr[n - i - 1]);
      } else {
        result += x;
        result += arr[n - i - 1] - arr[n - i - 2];
        // console.log(arr[i], arr[i + 2]);
        // console.log(arr[n - i - 2], arr[n - i - 1]);
      }
    } else {
      // console.log(i);
      // console.log(arr[i], arr[i + 1]);
      // console.log(arr[n - i - 2], arr[n - i - 1]);
      result += arr[i + 1] - arr[i];
      result += arr[n - i - 1] - arr[n - i - 2];
      length -= 4;
    }
  }

  console.log(result);
}

// 20 10 9 11 3 18 1
// 1 3 4 9 10 11 18 20 27 7 20 10 9 11 3 18 1
