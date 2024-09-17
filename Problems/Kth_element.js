function findKthMaxMin(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // The Kth minimum element
  const kthMin = arr[k - 1];

  // The Kth maximum element (array is sorted, so we get it from the end)
  const kthMax = arr[arr.length - k];

  return {
    kthMin: kthMin,
    kthMax: kthMax,
  };
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

const result = findKthMaxMin(arr, k);
console.log(`Kth Min: ${result.kthMin}, Kth Max: ${result.kthMax}`);
