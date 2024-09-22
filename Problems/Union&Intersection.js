function findUnion(arr1, arr2) {
  let i = 0,
    j = 0;
  let union = [];

  // Traverse both arrays using two pointers
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      union.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      union.push(arr2[j]);
      j++;
    } else {
      // If both are equal, add any one and move both pointers
      union.push(arr1[i]);
      i++;
      j++;
    }
  }

  // Add remaining elements of arr1
  while (i < arr1.length) {
    union.push(arr1[i]);
    i++;
  }

  // Add remaining elements of arr2
  while (j < arr2.length) {
    union.push(arr2[j]);
    j++;
  }

  return [...new Set(union)]; // Remove any duplicates if present
}

function findIntersection(arr1, arr2) {
  let i = 0,
    j = 0;
  let intersection = [];

  // Traverse both arrays using two pointers
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      // If both are equal, add to intersection and move both pointers
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }

  return intersection;
}

// Example usage
let arr1 = [1, 3, 4, 5, 7];
let arr2 = [2, 3, 5, 6];

console.log("Union:", findUnion(arr1, arr2)); // Union: [1, 2, 3, 4, 5, 6, 7]
console.log("Intersection:", findIntersection(arr1, arr2)); // Intersection: [3, 5]
