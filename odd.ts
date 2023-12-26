import { generateRandomArray3 } from "./utils";

// 1
const odd = (value: number[]): number[] => {
  let hold: number[] = [];

  value.forEach((el) => {
    if (el % 2 !== 0) {
      hold.push(el);
    }
  });

  return hold;
};

// 2
const getOddNumbers = (numbers: number[]): number[] => {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);

  return oddNumbers;
};

// Measure time for odd
console.time("odd");
odd(generateRandomArray3(10000000));
console.timeEnd("odd");

// Measure time for getOddNumbers
console.time("getOddNumbers");
getOddNumbers(generateRandomArray3(10000000));
console.timeEnd("getOddNumbers");
