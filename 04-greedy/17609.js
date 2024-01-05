const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...words] = input;
  let result = [];
  // for (let i = 0; i < words.length; i++) {
  //   const word = words[i];

  //   result.push(palindrome(word));
  // }
  palindrome('comwwtmoc');

  console.log(result.join('\n'));
}

function palindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (check(word, left + 1, right) || check(word, left, right - 1))
        return 1;
      return 2;
    }
  }
  return 0;
}

function check(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}
