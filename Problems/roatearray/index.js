function rotateArray(arr) {
  if (arr.length === 0) return arr; // Handle empty array case

  // Store the last element
  const lastElement = arr[arr.length - 1];

  // Shift elements to the right
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  // Set the first element to the last element
  arr[0] = lastElement;

  return arr;
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log("Original array:", array);
const rotatedArray = rotateArray(array);
console.log("Array after rotation:", rotatedArray);
