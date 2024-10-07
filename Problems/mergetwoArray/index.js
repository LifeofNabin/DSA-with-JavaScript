// Sample sorted arrays
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

// Display the arrays in the HTML
document.getElementById("array1").textContent = JSON.stringify(array1);
document.getElementById("array2").textContent = JSON.stringify(array2);

// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Push remaining elements of arr1 (if any)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Push remaining elements of arr2 (if any)
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Event listener for the merge button
document.getElementById("mergeButton").addEventListener("click", () => {
  const mergedArray = mergeSortedArrays(array1, array2);
  document.getElementById("mergedArray").textContent =
    JSON.stringify(mergedArray);
});
