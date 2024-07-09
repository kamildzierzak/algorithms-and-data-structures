const topKFrequent = (nums, k) => {
  const countMeIn = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (countMeIn.has(num)) {
      countMeIn.set(num, countMeIn.get(num) + 1);
    } else {
      countMeIn.set(num, 1);
    }
  }

  let sorted = Array.from(countMeIn.entries()).sort((a, b) => b[1] - a[1]);

  console.log(sorted);
  return sorted.slice(0, k).map(num => num[0]);
};
