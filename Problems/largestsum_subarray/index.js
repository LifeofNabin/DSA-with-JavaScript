function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

function calculateMaxSubArray() {
  const input = document.getElementById("arrayInput").value;
  const nums = input
    .split(",")
    .map((num) => parseInt(num.trim(), 10))
    .filter((num) => !isNaN(num));

  if (nums.length === 0) {
    document.getElementById("result").innerText = "Please enter a valid array.";
    return;
  }

  const result = maxSubArray(nums);
  document.getElementById("result").innerText =
    "Maximum sum of contiguous subarray: " + result;
}
