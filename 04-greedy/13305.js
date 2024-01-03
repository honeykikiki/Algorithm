const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let [n, dist, cost] = input;
  n = +n[0];
  dist = dist.split(' ').map(Number);
  cost = cost.split(' ').map(Number);

  let minCost = cost[0];
  for (let i = 0; i < n; i++) {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
  }

  let answer = BigInt(0);

  for (let i = 0; i < n - 1; i++) {
    answer += BigInt(dist[i]) * BigInt(cost[i]);
  }

  console.log(String(answer));
}

// ----------------------- (내 풀이)

// function solution(input) {
// let [tc, distance, oil] = input;
// tc = +tc[0];
// distance = distance.split(' ').map((i) => BigInt(i));
// oil = oil.split(' ').map((i) => BigInt(i));
// let arr = [];

// for (let i = 0; i < tc - 1; i++) {
//   arr.push([distance[i], oil[i]]);
// }

// let result = BigInt(0);
// let minOil = arr[0][1];

// for (const item of arr) {
//   if (minOil > item[1]) {
//     minOil = item[1];
//   }

//   result += minOil * item[0];
// }

// console.log(result.toString());
// }
