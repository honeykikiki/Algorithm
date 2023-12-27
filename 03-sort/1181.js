const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let arr = input;

  arr = [...new Set(arr)];

  arr = arr.filter((str) => !/\d/.test(str));

  console.log(
    arr
      .sort((a, b) => {
        if (a.length !== b.length) {
          return a.length - b.length;
        }

        // 길이가 같은 경우 사전순으로 정렬
        return a.localeCompare(b);
      })
      .join('\n')
  );
}
