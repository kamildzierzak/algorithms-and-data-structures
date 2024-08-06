const searchInsert = function (nums, target) {
  // O(n)
  for (let i = 0; i <= nums.length; i++) {
    // O(1)
    if (nums[i] >= target) {
      return i;
    } else if (nums[i] === undefined) {
      return nums.length;
    }
  }
};

// Worse time complexity: O(n)
