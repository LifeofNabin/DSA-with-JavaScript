Dynamic Programming:

Kadane's Algorithm is a dynamic programming approach that builds on solutions to subproblems.
It maintains two values: maxEndingHere (the maximum sum of the subarray that ends at the current position) and maxSoFar (the overall maximum found so far).
Greedy Choice:

At each position in the array, the algorithm decides whether to:
Include the current element in the existing subarray (maxEndingHere + nums[i]), or
Start a new subarray with the current element (nums[i]).
This greedy choice ensures that you are always keeping track of the best option available.
Linear Time Complexity:

The algorithm processes each element of the array exactly once, resulting in O(n) time complexity, making it very efficient for this problem.


How It Works:

By iterating through the array and updating the sums based on local maximums, it ensures that you find the largest possible sum of contiguous subarrays without needing nested loops, which would increase the time complexity.