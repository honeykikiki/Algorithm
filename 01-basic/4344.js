const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(list) {
  // Write your code
  let result = '';
  let [length, ...value] = list;
  let intList = value.map((item) => item.split(' '));

  for (let i = 0; i < +length; i++) {
    let average = 0;
    let averagePerson = 0;
    for (let j = 1; j <= +intList[i][0]; j++) {
      average += +intList[i][j];
    }
    average = average / +intList[i][0];

    for (let j = 1; j <= +intList[i][0]; j++) {
      if (average < +intList[i][j]) {
        averagePerson++;
      }
    }

    result += `${((averagePerson * 100) / +intList[i][0]).toFixed(3)}%\n`;
  }

  console.log(result);
}
