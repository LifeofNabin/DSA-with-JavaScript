function sort012(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid]
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

// Example usage:
let arr = [0, 1, 2, 1, 0, 2, 1, 0];
console.log(sort012(arr)); // Output: [0, 0, 0, 1, 1, 1, 2, 2]
