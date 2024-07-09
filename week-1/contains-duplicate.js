let containsDuplicate = function (nums) {
  let unique = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (unique.has(nums[i])) {
      return true;
    }
    unique.add(nums[i]);
  }

  return false;
};
