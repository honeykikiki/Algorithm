var answer = 1e9;
let visited = Array(6).fill(false);
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  dfs(begin, target, words, 0);
  return answer;
}

function dfs(begin, target, words, depth) {
  if (begin === target) {
    // console.log('depth', depth)
    answer = Math.min(depth, answer);
    return;
  }

  for (let i = 0; i < words.length; i++) {
    let nextBegin = words[i];
    if (visited[i]) continue;
    visited[i] = true;

    if (isPossible(begin.toString().split(""), nextBegin.split(""))) {
      dfs(nextBegin, target, words, depth + 1);
    }
    visited[i] = false;
  }
}

function isPossible(begin, tar) {
  let cnt = 0;
  for (let i = 0; i < begin.length; i++) {
    let tarItem = tar[i];
    let beginItem = begin[i];

    if (tarItem == beginItem) {
      cnt++;
    }
  }
  if (cnt >= 2) return true;
  else return false;
}

console.log(answer);
// 다음 문자로 변경이 가능한지 확인
// 변경이 가능 하면 변경
// 불가능 하면 다음 문자 확인
// target 문자가 되면 종료
// target 문자가 없으면 return -1
