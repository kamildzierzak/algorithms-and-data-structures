const topKFrequent = (nums, k) => {
  // O(1)
  const countMeIn = new Map();

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (countMeIn.has(num)) {
      countMeIn.set(num, countMeIn.get(num) + 1);
    } else {
      countMeIn.set(num, 1);
    }
  }

  // O(m log m) -> m is n if all elements are unique
  let sorted = Array.from(countMeIn.entries()).sort((a, b) => b[1] - a[1]);

  // O(k)
  return sorted.slice(0, k).map(num => num[0]);
};

// Worse time complexity: O(n log n)
