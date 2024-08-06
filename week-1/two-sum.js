let twoSum = function (nums, target) {
  let firstIndex;
  let secondIndex;

  // O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        firstIndex = i;
        secondIndex = j;
      }
    }
  }

  return [firstIndex, secondIndex];
};

// Worse time complexity: O(n^2)
