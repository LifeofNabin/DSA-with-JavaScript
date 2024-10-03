function minJumps(arr) {
  const n = arr.length;
  if (n <= 1) return 0; // No jumps needed for empty or single element array
  if (arr[0] === 0) return Infinity; // Cannot move anywhere if first element is 0

  