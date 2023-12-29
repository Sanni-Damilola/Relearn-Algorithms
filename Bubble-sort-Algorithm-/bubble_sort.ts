const testData1: number[] = [];

Array.apply(null, { length: 10000 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 1000);
    testData1.push(el);
  }
});

console.log("here", testData1);

// for (let i = 0; i <= 5; i++) {
//   for (let j = 5; j >= 0; j--) {
//     console.log(i, j);
//   }
// }

// console.time("code");
// const sort = (arr: number[]) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         let rev: number = arr[i];
//         arr[i] = arr[j];
//         arr[j] = rev;
//       }
//     }
//   }
//   return arr;
// };

// console.log(sort([9, 7, 5, 6, 4, 2, 3, 1]));

// const end: any = new Date();

// console.timeEnd("code");
