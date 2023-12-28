// Reversing a Number
let originalNumber = 236784223;
let reversedNumber = 0;

while (originalNumber !== 0) {
  let digit = originalNumber % 10;
  reversedNumber = reversedNumber * 10 + digit;
  originalNumber = Math.floor(originalNumber / 10);
}

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

let arrayToReverse: number[] = [1, 2, 3, 4];
// console.log(reverseArray(arrayToReverse));
