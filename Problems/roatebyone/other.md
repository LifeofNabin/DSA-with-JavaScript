Original Array:  [1, 2, 3, 4, 5]
Array after rotating by one:  [5, 1, 2, 3, 4]

Concepts Used in the Program:
1. Array Manipulation Methods:
pop() Method:
This method is used to remove the last element from an array.
In the program, it extracts the last element of the array, which is then moved to the front to achieve cyclic rotation.
unshift() Method:
This method adds one or more elements to the beginning of an array.
After removing the last element with pop(), unshift() is used to insert that element at the start, shifting all other elements one position to the right.
2. Cyclic Rotation:
The idea behind cyclic rotation is that the last element of the array moves to the first position, and all other elements shift one position forward.
This forms a "cycle," and with enough rotations, the array eventually returns to its original state.
This is useful in scenarios such as circular queues, task scheduling, or in algorithms that involve circular arrays.
3. Edge Case Handling:
Empty Array Check:
The program first checks if the array is empty (arr.length === 0). This ensures that no attempt is made to pop from an empty array, which would result in an undefined value.
4. Efficiency:
The time complexity of the program is O(n), where n is the number of elements in the array.
Both pop() and unshift() are linear time operations, as unshift() shifts the entire array after inserting the element at the beginning. However, for most small to moderate-sized arrays, this is efficient and works well.