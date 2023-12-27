import { generateRandomArray3 } from "./utils";

// Sorting function 1: Bubble Sort
const bubbleSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// Sorting function 2: Optimized Bubble Sort
const optimizedBubbleSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swapping occurred in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
};

// Generate an array of 10,000 random numbers using generateRandomArray3
const testData: number[] = generateRandomArray3(10000);

// Measure time for bubbleSort
console.time("Bubble Sort");
bubbleSort(testData.slice());
console.timeEnd("Bubble Sort");

// Measure time for optimizedBubbleSort
console.time("Optimized Bubble Sort");
optimizedBubbleSort(testData.slice());
console.timeEnd("Optimized Bubble Sort");
