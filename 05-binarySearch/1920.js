const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, findList, m, list] = input;
  n = +n;
  m = +m;
  findList = findList
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  list = list.split(' ').map(Number);

  let result = [];

  for (const x of list) {
    let start = 0;
    let end = findList.length;
    let flag = false;

    while (start < end) {
      let mid = parseInt((start + end) / 2);

      if (x < findList[mid]) {
        end = mid - 1;
      } else if (x > findList[mid]) {
        start = mid + 1;
      } else {
        flag = true;
        break;
      }
    }

    if (flag) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  console.log(result);
}
