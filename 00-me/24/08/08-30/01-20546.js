const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let 준현현금 = Number(input[0]);
let 준현주식 = 0;
let 성민현금 = Number(input[0]);
let 성민주식 = 0;
let arr = input[1].split(" ").map(Number);

let answer = [0, 0];

for (let i = 0; i < arr.length; i++) {
  const price = arr[i];

  // BNP
  /**
   * 1. 주식을 살 수 있으면 최대한 많이 산다
   */
  if (준현현금 >= price) {
    let 매수주식수 = parseInt(준현현금 / price);
    준현주식 += 매수주식수;
    준현현금 -= 매수주식수 * price;
  }

  // 타이밍
  /**
   * 모든 거래는 전량 매수 매도
   * 1. 3일 이상 상승하면 전량 매도
   * 2. 3일 이상 하락하면 전량 매수
   *  2-2 주식가격이 같으면 상승도 하락도 아니다.
   * 3.
   */

  if (arr[i - 3] > arr[i - 2] && arr[i - 2] > arr[i - 1]) {
    // 전량 매수
    if (성민현금 >= price) {
      성민주식 += parseInt(성민현금 / price);
      성민현금 -= parseInt(성민현금 / price) * price;
    }
  }

  if (arr[i - 3] < arr[i - 2] && arr[i - 2] < arr[i - 1]) {
    성민현금 += 성민주식 * price;
    성민주식 = 0;
  }

  // 3일 연속 하락

  // 마지막 날의 자산 계산
  if (i === arr.length - 1) {
    answer[0] = 준현현금 + 준현주식 * price;
    answer[1] = 성민현금 + 성민주식 * price;
  }
}

if (answer[0] > answer[1]) {
  console.log("BNP");
} else if (answer[0] < answer[1]) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}
