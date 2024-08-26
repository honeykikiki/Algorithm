const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * Coins
 * 우리나라 화폐단위, 특히 동전에는 1원, 5원, 10원, 50원, 100원, 500원이 있다.
 * 이 동전들로는 모든 정수의 금액을 만들 수 있으며 그 방법도 여러 가지가 있을 수 있다.
 * 예를 들어 30원을 만들기 위해서는 1원짜리 30개 또는 10원짜리 2개와 5원짜리 2개 등의 방법이 가능하다.
 * 동전의 종류가 주어질 때에 주어진 금액을 만드는 모든 방법을 세는 프로그램을 작성하시오.
 * 1. 테스트 케이스가 주어진다.
 * 2. 동전 정보가 주어진다.
 * 3. 금액이 주어진다
 * 문제 해결
 * 1. 주어진 금액이 되기 전까지 값을 넣어준다.
 * 2. 주어진 값을 넘기면 다시 뒤로 돌아간다.
 * 3. 주어진 값이 맞으면 카운트를 해준다.
 */

let testCase = Number(input[0]);
let line = 1;
let results = [];

while (testCase) {
  let length = Number(input[line]);
  let coins = input[line + 1].split(" ").map(Number);
  let M = Number(input[line + 2]);

  results.push(coinChangeWays(coins, M));

  testCase--;
  line += 3;
}

console.log(results);

function coinChangeWays(coins, target) {
  // DP 배열을 초기화합니다. dp[i]는 i원을 만드는 방법의 수를 의미합니다.
  const dp = Array(target + 1).fill(0);
  dp[0] = 1; // 0원을 만드는 방법은 1가지 (아무 동전도 사용하지 않음)

  // 각 동전에 대해 DP 배열을 업데이트합니다.
  for (let coin of coins) {
    for (let i = coin; i <= target; i++) {
      dp[i] += dp[i - coin];
    }
  }

  // 최종적으로 dp[target]이 target원을 만드는 방법의 수입니다.
  return dp[target];
}
