// Recursive Method
console.time("Recursive: ");
const RecursiveMethod = (arr: number[], value: number) => {
  let midValue = Math.floor(arr.length / 2);
  let mid = arr[midValue];

  if (value === mid) {
    return true;
  } else if (value < mid && arr.length > 1) {
    return RecursiveMethod(arr.slice(0, midValue), value);
  } else if (value > mid && arr.length > 1) {
    return RecursiveMethod(arr.slice(midValue, arr.length), value);
  }
  return false;
};
console.log(RecursiveMethod([1, 4, 6, 8, 29], 1));
