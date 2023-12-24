import { generateRandomArray } from "./utils";

const setIn = (arr: number[], value: number): number[][] => {
  const res: number[][] = [];
  const hashtable: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const counting: number = arr[i];

    if (hashtable[counting] !== undefined) {
      res.push([counting, hashtable[counting]]);
    } else {
      hashtable[value - counting] = counting;
    }
  }

  return res;
};

// console.log(setIn([7, 3, 0, 4], 5));

//  MERGE SORT
// Merge function for merging two sorted arrays
const merge = (arr1: number[], arr2: number[]): number[] => {
  let res: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
};

// Merge Sort implementation
const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid: number = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// Quick Sort implementation
const quickSort = (
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number[] => {
  if (start < end) {
    const pivotIdx: number = partition(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }

  return arr;
};

// Partition function for Quick Sort
const partition = (arr: number[], start: number, end: number): number => {
  const swap = (arr: number[], i: number, j: number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let pivot = arr[start];
  let idx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      idx++;
      swap(arr, idx, i);
    }
  }

  swap(arr, start, idx);
  return idx;
}; // Measure time for Merge Sort

console.time("Merge Sort");
mergeSort(generateRandomArray(10000000));
console.timeEnd("Merge Sort");

// Measure time for Quick Sort
console.time("Quick Sort");
quickSort(generateRandomArray(10000000));
console.timeEnd("Quick Sort");
