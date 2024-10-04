function minJumps(arr) {
  const n = arr.length;
  if (n <= 1) return 0; // No jumps needed for empty or single element array
  if (arr[0] === 0) return Infinity; // Cannot move anywhere if first element is 0

  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + arr[i]); // 
    // If we have come to the end of the current jump
    if (i === currentEnd) {
      jumps++; // We need to make a jump
      currentEnd = farthest; // Update the end for the next jump

      if (currentEnd >= n - 1) break;
    }
  }

  return jumps;
}

//Example usage
const arr = [2, 3, 1, 1, 4];
console.log(minJumps(arr)); // Output: 2

