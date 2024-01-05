const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getLength = () => {
//     return this.heap.length;
//   };

//   push = (node) => {
//     this.heap.push(node);
//     let i = this.heap.length - 1;
//     let parentI = Math.floor((i - 1) / 2);
//     while (i > 0 && this.heap[parentI] > this.heap[i]) {
//       this.swap(i, parentI);
//       i = parentI;
//       parentI = Math.floor((i - 1) / 2);
//     }
//   };

//   pop = () => {
//     if (this.heap.length === 1) {
//       return this.heap.pop();
//     }

//     const result = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let i = 0;
//     while (true) {
//       const leftI = i * 2 + 1,
//         rightI = i * 2 + 2;
//       if (leftI >= this.heap.size) {
//         break;
//       }
//       let nextI = i;
//       if (this.heap[nextI] > this.heap[leftI]) {
//         nextI = leftI;
//       }
//       if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
//         nextI = rightI;
//       }
//       if (nextI === i) {
//         break;
//       }
//       this.swap(i, nextI);
//       i = nextI;
//     }
//     return result;
//   };

//   swap = (a, b) => {
//     const temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   };
// }

// solution(input);

// function solution(input) {
//   let [n, ...numbers] = input;
//   const minHeap = new MinHeap();

//   for (let i = 0; i < numbers.length; i++) {
//     minHeap.push(+numbers[i]);
//   }

//   let totalCompareCount = 0;
//   while (minHeap.getLength() > 1) {
//     let aCount = minHeap.pop();
//     let bCount = minHeap.pop();
//     let compareCount = aCount + bCount;
//     totalCompareCount += compareCount;
//     minHeap.push(compareCount);
//   }
//   console.log(totalCompareCount);
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // 스와이프
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.log(arr);
}
