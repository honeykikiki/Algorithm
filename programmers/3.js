var answer = 0;
let visitedList;
let visited = new Map();
let primeList = new Map();

solution("173");
console.log("-------------------");
solution2("173");

function solution(numbers) {
  let answer = 0;
  const numArr = numbers.split("");
  const n = numArr.length;
  const ch = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: n }, () => 0);
  const tempSet = new Set();

  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  function DFS(depth, length) {
    if (depth === length) {
      const num = parseInt(temp.slice(0, length).join(""));
      if (num !== 0 && !tempSet.has(num) && isPrime(num)) {
        tempSet.add(num);
        console.log(num);
        answer++;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[depth] = numArr[i];
          DFS(depth + 1, length);
          ch[i] = 0;
        }
      }
    }
  }

  for (let length = 1; length <= n; length++) {
    DFS(0, length);
  }
  console.log(answer);
  return answer;
}

function solution2(numbers) {
  visitedList = Array(numbers.length).flat(false);
  dfs("", numbers.split(""));
  // console.log(primeList.size);
  return primeList.size;
}

function dfs(n, list) {
  if (n.length > list.length) return;
  if (visited.has(Number(n))) return;
  visited.set(Number(n));

  if (isPrime(Number(n))) {
    primeList.set(Number(n));
  }

  for (let i = 0; i < list.length; i++) {
    if (visitedList[i]) continue;
    visitedList[i] = true;
    dfs(n + list[i], list);
    visitedList[i] = false;
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
