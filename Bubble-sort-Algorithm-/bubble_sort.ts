// Generate an array of 10,000 random numbers between 0 and 999 (inclusive)
const testData1: number[] = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);

// console.log("here", testData1);

// Generate an array of numbers from 0 to 9999 (inclusive)
const testData2: number[] = Array.from({ length: 10000 }, (_, index) => index);

// console.log("here", testData2);

// Outer loop: Iterates from i=0 to i=5 (inclusive)
for (let i = 0; i <= 5; i++) {
  // Inner loop: Iterates from j=5 to j=0 (inclusive) in reverse order
  for (let j = 5; j >= 0; j--) {
    // console.log(i, j);
  }
}



// // console.log("here", sort(testData1));
// console.log(sort([9, 7, 5, 6, 4, 2, 3, 1]));

// const end: any = new Date();

// console.timeEnd("code");
