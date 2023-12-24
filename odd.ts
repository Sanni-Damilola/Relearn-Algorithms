// 1
const odd = (value: number[]) => {
  let hold: number[] = [];

  value.forEach((el) => {
    if (el % 2 !== 0) {
      hold.push(el);
    }
  });

  // return hold;

  return hold;
};
// console.log(odd([1, 2, 3, 4, 5, 67, 8]));

// 2
const getOddNumbers = (numbers: number[]): number[] => {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);

  return oddNumbers;
};
// console.log(getOddNumbers([1, 2, 3, 4, 5, 67, 8]));

