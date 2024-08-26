const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// push  X: 정수 X를 큐에 넣는 연산이다.
// pop : 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size : 큐에 들어있는 정수의 개수를 출력한다.
// empty : 큐가 비어있으면 1, 아니면 0을 출력한다.
// front : 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back : 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

let n = Number(input[0]);
let queue = [];

for (let i = 1; i <= n; i++) {
  let [str, value] = input[i].split(" ");

  if (str == "push") {
    queue.push(+value);
  }
  if (str == "pop") {
    console.log(queue.shift() ?? -1);
  }
  if (str == "size") {
    console.log(queue.length);
  }
  if (str == "empty") {
    console.log(queue.length > 0 ? 0 : 1);
  }
  if (str == "front") {
    console.log(queue[0] ?? -1);
  }
  if (str == "back") {
    console.log(queue[queue.length - 1] ?? -1);
  }
}
