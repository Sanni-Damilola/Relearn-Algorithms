import { generateRandomArray3 } from "./utils";

// Reversing a Number
let originalNumber = generateRandomArray3(1)[0];
let reversedNumber = 0;

console.time("Reverse Number");
while (originalNumber !== 0) {
  let digit = originalNumber % 10;
  reversedNumber = reversedNumber * 10 + digit;
  originalNumber = Math.floor(originalNumber / 10);
}
console.timeEnd("Reverse Number");
// console.log(reversedNumber);

// Reversing an Array
const reverseArray = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length / 2; i++) {
    // Swap elements symmetrically around the center
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

let arrayToReverse: number[] = generateRandomArray3(10);
console.time("Reverse Array");
// console.log(reverseArray(arrayToReverse));
console.timeEnd("Reverse Array");
