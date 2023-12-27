/**
 * 분할정복 알고리즘 ***
 * 1. 분할(divide) : 큰 문제를 작은 부분 문제로 분할한다.
 * 2. 정복(conquer) : 작은 부분 문제를 각각 해결한다.
 * 3. 조합(combine) : 해결한 부분 문제의 답을 이용해서 다시 큰 문제를 해결한다.
 *
 * 분할 정복은 일반적으로 재귀함수를 이용하여 구현한다.
 * 그 이유는? 큰 문제를 작은 문제로 "분할하는 방식이 동일한"경우가 많기 떄문이다.
 * 더 이상 쪼갤 수 없는 크기가 될 때까지 계속하여 분할한다.
 *
 * 문제
 * 일반적인 재귀 함수를 사용하면 함수 호출 횟수가 많이 발생한다.
 * 이는 오버플로우로 이어지게 된다.
 *
 * 동작방식
 * 1. 분할: 정렬할 배열을 같은크기의 부분 배열 2개로 분할한다.
 * 2. 정복: 부분 배열을 정렬한다. (작은 문제를 해결한다.)
 * 3. 조합: 정렬된 부분 배열을 하나의 배열로 다시 병합한다.
 *
 * 장점: 최악의 경우에도 0(NlogN)을 보장할 수 있다는 점에서 효율적이다.
 * 단점: 일반적인 경우, 정복(conquer) 과정에서 임시 배열이 필요하다.
 */

function merge(arr, left, mid, right, sorted) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스

  while (i <= mid && j <= right) {
    sorted[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
  }

  while (i <= mid) sorted[k++] = arr[i++];
  while (j <= right) sorted[k++] = arr[j++];

  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    let sorted = new Array(arr.length).fill(0);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right, sorted);
  }
}

mergeSort([9, 4, 6, 8, 2, 3, 1, 7, 5], 0, 8);
