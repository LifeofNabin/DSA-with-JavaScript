function rotateArrayByOne(arr) {
  // Check if the array is not empty
  if (arr.length === 0) return arr;

  // Remove the last element and store it in a variable
  let lastElement = arr.pop();

  // Insert the last element at the beginning of the array
  arr.unshift(lastElement);

  return arr;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log("Original Array: ", array);

let rotatedArray = rotateArrayByOne(array);
console.log("Array after rotating by one: ", rotatedArray);
