const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, soldierList] = input;
  soldierList = soldierList.split(' ').map(Number);
  soldierList.reverse();

  let arr = [0];
  for (const x of soldierList) {
    if (arr[arr.length - 1] < x) arr.push(x);
    else {
      let index = lowerBound(arr, x, 0, arr.length);
      arr[index] = x;
    }
  }

  console.log(n - (arr.length - 1));
}

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}
