/**
 * @sort함수
 * 오름차순 내림차순 설정 가능
 * 반환 값이 0보다 작은경우 -> a가 우선순위가 높아, 앞에 위치한다.
 * 반환 값이 0보다 큰경우 -> b가 우선순위가 높아, 앞에 위치한다.
 * 반환 값이 0인 경우 => a와 b의 순서가 변경하지 않는다.
 */

let arr = [9, 4, 6, 8, 2, 3, 1, 7, 5];

function compare(a, b) {
  return a - b; // 오름차순
  return b - a; // 내림차순
}

function compare2(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();

  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}

arr.sort(compare);

console.log(arr);

// 객체 정렬
let arr2 = [
  { name: '허성진', score: 90 },
  { name: '이아연', score: 70 },
  { name: '장광진', score: 60 },
];

function compare3(a, b) {
  return b.score - a.score;
}

arr2.sort(compare3);

console.log(arr2);
