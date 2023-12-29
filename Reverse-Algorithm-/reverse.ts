let rev = 0;
let num = 236784223;
let c;

while (num != 0) {
  // remember to sort
  c = num % 10;
  rev = rev * 10 + c;
  num = Math.floor(num / 10);
}
// console.log(rev);


// const reverse1 = (x: number[]) => {
//   for (let i = 0; i < x.length / 2; i++) {
//     let rev = x[i];
//     x[i] = x[x.length - 1 - i];
//     x[x.length - 1 - i] = rev;
//   }
//   return x;
// };
// let arr_value: number[] = [1, 2, 3, 4];
// console.log(reverse1(arr_value));
