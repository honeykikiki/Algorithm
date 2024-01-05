const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let [n, ...numbers] = input;
  const minHeap = new MinHeap();
  for (let i = 1; i < numbers.length; i++) {
    minHeap.push(+numbers[i]);
  }

  let totalCompareCount = 0;
  while (minHeap.getLength() > 1) {
    let aCount = minHeap.pop();
    let bCount = minHeap.pop();
    let compareCount = aCount + bCount;
    totalCompareCount += compareCount;
    minHeap.push(compareCount);
  }
  console.log(totalCompareCount);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength = () => {
    return this.heap.length;
  };

  push = (node) => {
    this.heap.push(node);
    let i = this.heap.length - 1;
    let parseInt = Math.floor(i - 1 / 2);

    while (i > 0 && this.heap[parseInt] > this.heap[i]) {
      // 크기순 정렬
      this.swap(i, parseInt);
      i = parseInt;
      parseInt = Math.floor(i - 1 / 2);
    }
  };

  pop = (node) => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * +2;

      if (leftI >= this.heap.size) {
        break;
      }

      let nextI = i;
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }

      if (rightI < this.heap.length && this.heap[nextI]) {
        nextI = rightI;
      }
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }

    return result;
  };

  swap = (a, b) => {
    // 위치 변경
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
}

solution(input);
