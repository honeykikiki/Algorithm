function insertionSort(arr) {
  // 삽입정렬
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      index++;
      if (arr[j] > arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        break; // 정렬된 부분에서 삽입 위치를 찾았으므로 반복 중단
      }
    }
  }
  console.log(arr);
  console.log(index);
}

// insertionSort([9, 4, 6, 8, 2, 3, 1, 7, 5]);

// function insertionSort(arr) {
//   let index = 0;
//   // 삽입정렬
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       index++;
//       if (arr[j] < arr[j - 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
// }

// insertionSort([9, 4, 6, 8, 2, 3, 1, 7, 5]);
// insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
