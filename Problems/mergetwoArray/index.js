function mergeSortedArrays(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i < 0 || arr2[j] >= arr1[i]) {
      arr1[k] = arr2[j];
      j--;
    } else {
      arr1[k] = arr1[i];
      i--;
    }
    k--;
  }
}

// Example arrays
let arr1 = [1, 3, 5, 0, 0, 0]; // Placeholder for merged values
let arr2 = [2, 4, 6];

