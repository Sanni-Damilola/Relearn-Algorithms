const binarySearch = (arr: number[], target: number): number => {
    // Ensure the array is sorted
    arr.sort((a, b) => a - b);
  
    let start = 0;
    let end = arr.length - 1;
  
    // Loop until the start index is less than or equal to the end index
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
  
      if (arr[middle] === target) {
        // Target found, return its index
        return middle;
      } else if (arr[middle] < target) {
        // If the target is greater, search the right half
        start = middle + 1;
      } else {
        // If the target is smaller, search the left half
        end = middle - 1;
      }
    }
  
    // If the target is not found, return -1
    return -1;
  };
  
  // Example usage
  const result = binarySearch([1, 2, 3, 4, 5, 6], 3);
  console.log(result);
  