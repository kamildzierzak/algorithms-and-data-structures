const productExceptSelf = nums => {
  const result = new Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let j = nums.length - 1; j > -1; j--) {
    result[j] *= right;
    right *= nums[j];
  }

  return result;
};
