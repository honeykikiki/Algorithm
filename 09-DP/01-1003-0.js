const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let line = 1;
let d = [];
d[0] = 0;
d[1] = 1;

while (n--) {
  let t = Number(input[line]);

  fibo(t);

  if (t == 0) console.log(1, 0);
  else console.log(d[t - 1], d[t]);
  line++;
}

function fibo(x) {
  if (x == 0) {
    return 0;
  }

  if (x == 1) {
    return 1;
  }

  if (d[x]) {
    return d[x];
  }

  d[x] = fibo(x - 1) + fibo(x - 2);

  return d[x];
}

// 8
// 0
// 1
// 2
// 3
// 4
// 20
// 21
// 22
