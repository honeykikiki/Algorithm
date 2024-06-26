const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, ...arr] = input;

// 답을 담기 위한 배열
let ans = [];

// 스택 생성
let stack = [];

// 스택은 1부터 차례대로만 넣을 수 있기 때문에 1을 시작 숫자로 지정한다.
let stackNum = 1;

for (let i = 1; i <= n; i++) {
  // input의 배열값 순서대로 수열을 만들어야하므로
  // 우리가 stack에서 꺼내야할 숫자는 input[i]에 해당하는 숫자이다.
  let num = Number(input[i]);

  // stack에 stackNum을 push한다.
  // stackNum은 1부터 num까지 증가한다.
  // push할 때마다 ans 배열에 "+" 문자를 push한다.
  // 주의할 점. stackNum은 반복문 외부에 선언되었기 때문에
  // 반복문이 돌아갈 때 다시 1부터 시작될 일은 없다.
  // 즉, 순서대로 증가하면서 push 되는 것이 구현된 것이다.
  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    ans.push("+");
  }

  // stack에 num까지 들어갔으므로
  // pop을 하면 num과 같은 숫자가 나오게 된다.
  // pop할 때마다 ans 배열에 "-" 문자를 push한다.
  let stackPop = stack.pop();
  ans.push("-");

  // 만약 stack에서 pop한 값과 num이 일치하지않는다면
  // 그 것은 문제 조건에 맞춰서 수열로 만들어낼 수 없는 경우이므로
  // ans 배열을 ["NO"]로 완전히 교체하고, for문을 종료한다.
  if (stackPop !== num) {
    ans = ["NO"];
    break;
  }
}

console.log(ans.join("\n"));

// 시간 초과
// arr = arr.map(Number);
// let list = [];

// let idx = 0;
// let result = "";
// for (let i = 1; i <= n; i++) {
//   list.push(i);
//   // result.push("+");
//   result += "+\n";
//   if (arr[idx] == i) {
//     list.pop();
//     result += "-\n";
//     idx++;
//     // 여기서 arr의 다음 값이 안에 있는 경우
//     if (arr[idx] == list[list.length - 1]) {
//       for (let j = i - 2; j >= 0; j--) {
//         if (list[j] == arr[idx]) {
//           list.pop();
//           result += "-\n";
//           idx++;
//         }
//       }
//     }
//   }
//   // console.log("--------------------------------");
// }

// if (list.length > 0) console.log("NO");
// else console.log(result);
