//  Utility function to generate an array of random numbers
export const generateRandomArray3 = (size: number): number[] => {
  const randomArray: number[] = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(Math.floor(Math.random() * size));
  }
  return randomArray;
};

// Generate an array of 10,000 random numbers between 0 and 999 (inclusive)
export const generateRandomArray1: number[] = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);


// Generate an array of numbers from 0 to 9999 (inclusive)
export const generateRandomArray2: number[] = Array.from({ length: 10000 }, (_, index) => index);
