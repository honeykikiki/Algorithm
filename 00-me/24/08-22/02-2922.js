const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 즐거운 단어
 * 1. 단어를 만든다. _가 들어 간곳에 단어를 추가해서
 * 2. 단어를 만드는데 규칙은 모음(A,E,I,O,U)이 연속해서 3번, 자음(모음을 제외한 나머지 알파벳)이 연속해서 3번 나오지 않아야 한다
 * 3. L은 필수로 들어가야 한다
 *
 * 문제 풀이
 * 1. _가 어디에 있는지 찾는다
 * 2. L이 없는 경우 L을 넣는다
 * 3. _에 규칙에 맞는 문자를 넣어준다
 *
 */

const vowels = new Set(["A", "E", "I", "O", "U"]);
const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isVowel(char) {
  return vowels.has(char);
}

function countHappyWords(word) {
  const dp = new Map();

  function dfs(index, consecutiveVowels, consecutiveConsonants, containsL) {
    if (index === word.length) {
      return containsL ? 1 : 0;
    }

    const key = `${index}-${consecutiveVowels}-${consecutiveConsonants}-${containsL}`;
    if (dp.has(key)) {
      return dp.get(key);
    }

    let count = 0;
    if (word[index] !== "_") {
      const currentChar = word[index];
      const nextVowelCount = isVowel(currentChar) ? consecutiveVowels + 1 : 0;
      const nextConsonantCount = !isVowel(currentChar)
        ? consecutiveConsonants + 1
        : 0;

      if (nextVowelCount < 3 && nextConsonantCount < 3) {
        count = dfs(
          index + 1,
          nextVowelCount,
          nextConsonantCount,
          containsL || currentChar === "L"
        );
      }
    } else {
      for (const letter of allLetters) {
        const nextVowelCount = isVowel(letter) ? consecutiveVowels + 1 : 0;
        const nextConsonantCount = !isVowel(letter)
          ? consecutiveConsonants + 1
          : 0;

        if (nextVowelCount < 3 && nextConsonantCount < 3) {
          count += dfs(
            index + 1,
            nextVowelCount,
            nextConsonantCount,
            containsL || letter === "L"
          );
        }
      }
    }

    dp.set(key, count);

    return count;
  }

  return dfs(0, 0, 0, false);
}

let str = input[0];
console.log(countHappyWords(str));
