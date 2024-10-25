const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);

    if (nums[middle] < target) {
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

const test = [-1, 0, 3, 5, 9, 12];

search(test, 9);
