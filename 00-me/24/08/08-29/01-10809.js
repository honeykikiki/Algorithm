const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let 철수 = [];
let 사회자 = [];
let 위치 = Array(25).fill([]);

for (let i = 0; i < 5; i++) {
  철수.push(input[i].split(" ").map(Number));
  사회자.push(...input[i + 5].split(" ").map(Number));
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    위치[철수[i][j]] = [i, j];
  }
}

let find = false;
for (let i = 0; i < 사회자.length; i++) {
  const element = 사회자[i];
  let [x, y] = 위치[element];
  철수[x][y] = -1;

  // 여기서 빙고가 됬는지 확인
  // console.log(i);
  if (inPosable()) {
    console.log(i + 1);
    break;
  }
}

function inPosable() {
  let row = 0;
  let column = 0;
  let cross = 0;

  for (let x = 0; x < 5; x++) {
    let rowCnt = 0;
    let columnCnt = 0;
    for (let y = 0; y < 5; y++) {
      // 가로 검사

      if (철수[x][y] == -1) rowCnt += 1;

      // 세로 검사
      if (철수[y][x] == -1) columnCnt += 1;
    }

    if (rowCnt >= 5) row++;
    if (columnCnt >= 5) column++;
    // console.log(rowCnt, columnCnt);
  }

  // 대각선
  let crossCnt1 = 0;
  let crossCnt2 = 0;
  for (let i = 0; i < 5; i++) {
    if (철수[i][i] == -1) crossCnt1 += 1;
    if (철수[i][4 - i] == -1) crossCnt2 += 1;
  }
  // console.log(crossCnt1, crossCnt2);

  if (crossCnt1 >= 5) cross++;
  if (crossCnt2 >= 5) cross++;

  // console.log(철수.join("\n"));
  // console.log(row, column, cross);
  // console.log("===============================");

  if (row + column + cross >= 3) {
    return true;
  }

  return false;
}
