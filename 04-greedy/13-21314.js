const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0].split("");

let max = findMax(arr);
let min = findMin(arr);
console.log(max);
console.log(min);

function findMax(inputData) {
  let tmp = [];
  let maxNum = "";

  inputData.forEach((val) => {
    if (val === "M") {
      tmp.push(val);
    } else {
      if (!tmp.length) {
        maxNum += "5";
      } else {
        if (tmp.at(-1) === "M") {
          let a = "5";
          a = a.padEnd(tmp.length + 1, "0");
          maxNum += a;
          tmp = [];
        }
      }
    }
  });

  if (tmp.length) {
    tmp.forEach((val) => {
      if (val === "M") {
        maxNum += "1";
      } else {
        maxNum += "5";
      }
    });
  }

  return maxNum;
}

function findMin(inputData) {
  let tmp2 = [];
  let minNum = "";

  inputData.forEach((val) => {
    if (val === "K") {
      if (tmp2.length) {
        let a = "1";
        a = a.padEnd(tmp2.length, "0");
        minNum += a;
        tmp2 = [];
      }
      minNum += "5";
    } else {
      tmp2.push(val);
    }
  });

  if (tmp2.length) {
    if (tmp2[0] === "M") {
      let a = "1";
      a = a.padEnd(tmp2.length, "0");
      minNum += a;
    } else {
      minNum += "5";
    }
  }
  return minNum;
}

// let start = 0;
// if (arr.includes("K")) {
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item == "K") {
//       for (let j = start; j <= i; j++) {
//         if (j == start) {
//           max[j] = 5;
//         } else {
//           max[j] = 0;
//         }

//         if (j == i) {
//           min[j] = 5;
//         } else if (j == start) {
//         } else {
//           min[j] = 0;
//         }
//       }
//       start = i + 1;
//     } else {
//       min.push(1);
//       max.push(1);
//     }
//   }
// } else {
//   max = Array(arr.length).fill(1);
//   min = Array(arr.length).fill(0);
//   min[0] = 1;
// }

// console.log(max.join(""));
// console.log(min.join(""));
