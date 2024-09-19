function moveNegativesToLeft(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] < 0) {
      left++;
    } else if (arr[right] >= 0) {
      right--;
    } else {
      // Swap positive element at left with negative element at right
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr;
}

// Example usage
let arr = [12, -7, 5, -3, 9, -1, -5, 4];
console.log(moveNegativesToLeft(arr)); // Output: [-5, -7, -1, -3, 9, 5, 12, 4]
