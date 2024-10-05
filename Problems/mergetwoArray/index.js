function mergeSortedArrays(arr1, m, arr2, n) {
    // Pointer for the last element in arr1
    let i = m - 1; 
    // Pointer for the last element in arr2
    let j = n - 1; 
    // Pointer for the last position of the merged array
    let k = m + n - 1; 

    