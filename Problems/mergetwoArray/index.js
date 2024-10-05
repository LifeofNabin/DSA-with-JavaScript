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

// Display initial arrays in the DOM
document.getElementById("array1").textContent = `(${arr1.join(", ")})`;
document.getElementById("array2").textContent = `(${arr2.join(", ")})`;

// Add event listener to the button
document.getElementById("mergeButton").addEventListener("click", function () {
  mergeSortedArrays(arr1, 3, arr2, 3); // Merge the arrays
  document.getElementById("mergedArray").textContent = `(${arr1.join(", ")})`; // Display merged array
});
