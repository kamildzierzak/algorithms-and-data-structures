const productExceptSelf = nums => {
  // O(n)
  const result = new Array(nums.length).fill(1);

  // O(n)
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  // O(n)
  let right = 1;
  for (let j = nums.length - 1; j > -1; j--) {
    result[j] *= right;
    right *= nums[j];
  }

  return result;
};

// Worse time complexity: O(n)
