let singleNumber = function (nums) {
  // O(n log n)
  nums.sort((x, y) => x - y);

  // O(n)
  for (let i = 0; i < nums.length; i += 2) {
    // O(1)
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

// Worse time complexity: O(n log n)
