const odd = (value: number[]) => {
  let hold: number[] = [];

  value.forEach((el) => {
    if (el % 2 !== 0) {
      hold.push(el);
    }
  });
  for (let i = 0; i <= value.length; i++) {
    if (i % 2 !== 0) {
      hold.push(i);
    }
  }

  // return hold;

  return hold;
};

console.log(odd([1, 2, 3, 4, 5, 67, 8]));
