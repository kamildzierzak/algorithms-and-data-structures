let singleNumber = function (nums) {
  nums.sort((x, y) => x - y);

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
