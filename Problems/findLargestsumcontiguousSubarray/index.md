# Largest Sum Contiguous Subarray - Kadane's Algorithm

## Problem Statement:
Given an array of integers, find the **contiguous subarray** (containing at least one number) which has the **largest sum** and return its sum.

## Kadane's Algorithm:
Kadane's Algorithm is an efficient way to solve this problem in **O(n)** time. The algorithm dynamically computes the maximum sum of the subarray ending at each position and keeps track of the overall maximum sum found so far.

### Algorithm Steps:
1. **Initialize two variables**:
   - `maxEndingHere` to store the maximum sum of the subarray ending at the current position.
   - `maxSoFar` to store the overall maximum sum found so far.
   
2. **Iterate through the array**:
   - For each element, decide whether to continue the existing subarray (`maxEndingHere + arr[i]`) or start a new subarray from the current element (`arr[i]`).
   - Update `maxEndingHere` with the maximum of these two values.
   
3. **Update `maxSoFar`** at each step to ensure it holds the highest value of the contiguous subarray sum seen up to that point.

### Pseudocode:
- Initialize `maxEndingHere` and `maxSoFar` to the first element of the array.
- Traverse through the array from the second element:
  - `maxEndingHere = max(arr[i], maxEndingHere + arr[i])`
  - `maxSoFar = max(maxSoFar, maxEndingHere)`
- Return `maxSoFar`.

## JavaScript Implementation:
```javascript
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
