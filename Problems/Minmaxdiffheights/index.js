function minimizeMaxDifference(heights, k) {
  if (heights.length === 0) return 0;

  // Sort the heights
  heights.sort((a, b) => a - b);

  const n = heights.length;

  // The maximum possible difference after adjusting
  let maxDiff = heights[n - 1] - heights[0];

  // Edge case: if there is only one height or all heights are the same
  if (maxDiff === 0) return 0;

  // Calculate the potential new maximum difference
  const newMax = heights[n - 1] - k;
  const newMin = heights[0] + k;

  // Minimum difference
  return Math.max(0, newMax - newMin);
}

// Example usage
const heights = [3, 7, 8, 10];
const k = 2; // You can increase/decrease heights by k
const result = minimizeMaxDifference(heights, k);
console.log(result); // Output the minimized maximum difference
