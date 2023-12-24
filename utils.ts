//  Utility function to generate an array of random numbers
export const generateRandomArray = (size: number): number[] => {
  const randomArray: number[] = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(Math.floor(Math.random() * size));
  }
  return randomArray;
};
