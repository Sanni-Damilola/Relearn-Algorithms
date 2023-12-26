//  Utility function to generate an array of random numbers
export const generateRandomArray3 = (size: number): number[] => {
  const randomArray: number[] = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(Math.floor(Math.random() * size));
  }
  return randomArray;
};

// Generate an array of 10,000 random numbers between 0 and 999 (inclusive)
export const generateRandomArray1: number[] = Array.from(
  { length: 10000 },
  () => Math.floor(Math.random() * 1000)
);

// Generate an array of numbers from 0 to 9999 (inclusive)
export const generateRandomArray2: number[] = Array.from(
  { length: 10000 },
  (_, index) => index
);

// Measure time for generateRandomArray3
const generateRandomArray3Start = performance.now();
generateRandomArray3(10000);
const generateRandomArray3End = performance.now();
console.log(
  "generateRandomArray3 Time:",
  generateRandomArray3End - generateRandomArray3Start,
  "milliseconds"
);

// Measure time for generateRandomArray1
const generateRandomArray1Start = performance.now();
generateRandomArray1;
const generateRandomArray1End = performance.now();
console.log(
  "generateRandomArray1 Time:",
  generateRandomArray1End - generateRandomArray1Start,
  "milliseconds"
);

// Measure time for generateRandomArray2
const generateRandomArray2Start = performance.now();
generateRandomArray2;
const generateRandomArray2End = performance.now();
console.log(
  "generateRandomArray2 Time:",
  generateRandomArray2End - generateRandomArray2Start,
  "milliseconds"
);
