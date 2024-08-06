let containsDuplicate = function (nums) {
  // O(1)
  let unique = new Set();

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    // O(1)
    if (unique.has(nums[i])) {
      return true;
    }

    // O(1)
    unique.add(nums[i]);
  }

  return false;
};

// Worse time complexity: O(n)
