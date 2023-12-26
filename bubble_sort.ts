// Outer loop: Iterates from i=0 to i=5 (inclusive)
for (let i = 0; i <= 5; i++) {
  // Inner loop: Iterates from j=5 to j=0 (inclusive) in reverse order
  for (let j = 5; j >= 0; j--) {
    // console.log(i, j);
  }
}

// 1
const sortArr1 = (arr: number[]): number[] | void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let reverse: number = arr[i];
        arr[i] = arr[j];
        arr[j] = reverse;
      }
    }
  }
  return arr;
};

// console.log("here", sortArr1(testData1));
// console.log(sortArr1([3, 2, 1]));

// 2
const sortArr2 = (arr: number[]): number[] | void => {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }

  return sortedArr;
};

// console.log("here", sortArr2(testData1));
// console.log("here", sortArr2([3, 2, 1]));

