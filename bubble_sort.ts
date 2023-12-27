// Nested Loop
// Iterates from i=0 to i=5 (inclusive) and j=5 to j=0 (inclusive) in reverse order
for (let i = 0; i <= 5; i++) {
  for (let j = 5; j >= 0; j--) {
    // console.log(i, j);
  }
}

// 1
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

// 2
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

// Usage example
const testData: number[] = [3, 2, 1];

console.log("Bubble Sort:", bubbleSort(testData.slice()));
console.log("Optimized Bubble Sort:", optimizedBubbleSort(testData.slice()));
