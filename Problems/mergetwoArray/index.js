function mergeSortedArrays(arr1, m, arr2, n) {
  // Pointer for the last element in arr1
  let i = m - 1;
  // Pointer for the last element in arr2
  let j = n - 1;
  // Pointer for the last position of the merged array
  let k = m + n - 1;

  while (j >= 0) {
    // If arr1 is exhausted or the current element in arr2 is greater
    if (i < 0 || arr2[j] >= arr1[i]) {
      arr1[k] = arr2[j]; // Place element from arr2 in arr1
      j--; // Move to the next element in arr2
    } else {
      arr1[k] = arr1[i]; // Place element from arr1 in arr1
      i--; // Move to the next element in arr1
    }
    k--; // Move to the next position in merged array
  }
}

// Example usage
let arr1 = [1, 3, 5, 0, 0, 0]; // The last three zeros are placeholders
let arr2 = [2, 4, 6];
mergeSortedArrays(arr1, 3, arr2, 3);
console.log(arr1); // Output: [1, 2, 3, 4, 5, 6]
