//  Utility function to generate an array of random numbers
export const generateRandomArray = (size: number): number[] => {
  const randomArray: number[] = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(Math.floor(Math.random() * size));
  }
  return randomArray;
};

// Generate an array of 10,000 random numbers between 0 and 999 (inclusive)
export const testData1: number[] = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);

// console.log("here", testData1);

// Generate an array of numbers from 0 to 9999 (inclusive)
export const testData2: number[] = Array.from({ length: 10000 }, (_, index) => index);
