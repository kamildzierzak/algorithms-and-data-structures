const searchInsert = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    } else if (nums[i] === undefined) {
      return nums.length;
    }
  }
};
