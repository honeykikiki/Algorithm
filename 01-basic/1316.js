const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let result = 0;
  let [length, ...list] = input;
  for (let i = 0; i < length; i++) {
    const data = list[i];
    if (check(data)) result++;
  }

  console.log(result);
}

function check(data) {
  let setData = new Set(data[0]);

  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }

  return true;
}
