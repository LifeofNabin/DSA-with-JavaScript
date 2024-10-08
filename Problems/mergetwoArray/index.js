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
  // Get input values
  const input1 = document.getElementById("inputArray1").value;
  const input2 = document.getElementById("inputArray2").value;

  // Convert input strings to arrays of numbers
  const array1 = input1
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
  const array2 = input2
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);

  // Merge the sorted arrays
  const mergedArray = mergeSortedArrays(array1, array2);
  document.getElementById("mergedArray").textContent =
    JSON.stringify(mergedArray);
});
