// Best time complexity: Ω(1)
// Average time complexity: Θ(log n)
// Worse time complexity: O(log n)
// Space complexity: O(1)
const findMin = nums => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);

    if (nums[middle] < nums[high]) {
      high = middle;
    } else if (nums[middle] > nums[high]) {
      low = middle + 1;
    } else {
      return nums[middle];
    }
  }

  return nums[low];
};

const test = [
  [3, 4, 5, 1, 2],
  [4, 5, 6, 7, 0, 1, 2],
  [11, 13, 15, 17],
];

test.forEach(nums => {
  console.log(findMin(nums));
});
