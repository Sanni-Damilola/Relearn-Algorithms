import { generateRandomArray3 } from "./utils";

// Original Recursive Method
console.time("Original Recursive");
const originalRecursiveMethod = (arr: number[], value: number): boolean => {
  let midValue = Math.floor(arr.length / 2);
  let mid = arr[midValue];

  if (value === mid) {
    return true;
  } else if (value < mid && arr.length > 1) {
    return originalRecursiveMethod(arr.slice(0, midValue), value);
  } else if (value > mid && arr.length > 1) {
    return originalRecursiveMethod(arr.slice(midValue, arr.length), value);
  }
  return false;
};
console.timeEnd("Original Recursive");

// Improved Recursive Method
const improvedRecursiveSearch = (arr: number[], value: number): boolean => {
  // Base case: If the array is empty, the value is not found
  if (arr.length === 0) {
    return false;
  }

  const midIndex = Math.floor(arr.length / 2);
  const midValue = arr[midIndex];

  if (value === midValue) {
    // Base case: Value found
    return true;
  } else if (value < midValue) {
    // Recursive case: Search in the left half of the array
    return improvedRecursiveSearch(arr.slice(0, midIndex), value);
  } else {
    // Recursive case: Search in the right half of the array
    return improvedRecursiveSearch(arr.slice(midIndex + 1), value);
  }
};

// Test the improved recursive search with generateRandomArray3
const arrToSearch = generateRandomArray3(10000);
const searchValue = arrToSearch[Math.floor(Math.random() * arrToSearch.length)]; // Pick a random value

console.time("Improved Recursive");
const isValueFound = improvedRecursiveSearch(arrToSearch, searchValue);
console.timeEnd("Improved Recursive");

console.log(`Is ${searchValue} found? ${isValueFound}`);
