function maxSubArraySum(arr) {
  // Initialize variables
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  // Traverse the array from the second element
  for (let i = 1; i < arr.length; i++) {
    // Update maxEndingHere by including the current element or starting new from current element
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    // Update maxSoFar to store the maximum sum found so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
let array = [-2, -3, 4, -1, -2, 1, 5, -3];
let largestSum = maxSubArraySum(array);
console.log("Largest sum of contiguous subarray: ", largestSum);
