function findDuplicate(nums) {
    // Step 1: Initialize the tortoise and hare
    let tortoise = nums[0];
    let hare = nums[0];

    // Step 2: Move the tortoise by one step and the hare by two steps
    do {
        tortoise = nums[tortoise]; // move tortoise by one step
        hare = nums[nums[hare]]; // move hare by two steps
    } while (tortoise !== hare); // loop until they meet

    // Step 3: Find the entrance to the cycle
    let ptr1 = nums[0]; // start pointer from the beginning
    let ptr2 = tortoise; // start pointer from the meeting point

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1; 
}

// Example usage
const arr = [3, 1, 3, 4, 2];
console.log(findDuplicate(arr)); // Output: 3
