// Hardcoded array and K value
let userArray = [12, 3, 5, 7, 19, 26];
let k = 3; // Finding 3rd min and max

// Finding the Kth minimum element manually
for (let i = 0; i < k; i++) {
  let minIndex = i;
  for (let j = i + 1; j < userArray.length; j++) {
    if (userArray[j] < userArray[minIndex]) {
      minIndex = j;
    }
  }
  // Swap to sort the smallest to the front
  let temp = userArray[i];
  userArray[i] = userArray[minIndex];
  userArray[minIndex] = temp;
}
let kthMin = userArray[k - 1]; // The Kth minimum element

// Reset the array for finding the Kth maximum element
let userArrayCopy = [12, 3, 5, 7, 19, 26];

// Finding the Kth maximum element manually
for (let i = 0; i < k; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < userArrayCopy.length; j++) {
    if (userArrayCopy[j] > userArrayCopy[maxIndex]) {
      maxIndex = j;
    }
  }
  // Swap to sort the largest to the front
  let temp = userArrayCopy[i];
  userArrayCopy[i] = userArrayCopy[maxIndex];
  userArrayCopy[maxIndex] = temp;
}
let kthMax = userArrayCopy[k - 1]; // The Kth maximum element

// Displaying the results
console.log(`Kth Min: ${kthMin}, Kth Max: ${kthMax}`);
