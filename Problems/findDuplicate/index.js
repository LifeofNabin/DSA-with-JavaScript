function findDuplicate(nums) {
    // Step 1: Initialize the tortoise and hare
    let tortoise = nums[0];
    let hare = nums[0];

    // Step 2: Move the tortoise by one step and the hare by two steps
    do {
        tortoise = nums[tortoise]; // move tortoise by one step
        hare = nums[nums[hare]]; // move hare by two steps
    } while (tortoise !== hare); // loop until they meet

    