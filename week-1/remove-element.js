const removeElement = function (nums, val) {
  // O(1)
  let counter = 0;

  // O(n)
  nums.forEach((num, index, array) => {
    if (num !== val) {
      array[counter] = num;
      counter++;
    }
  });

  return counter;
};

// Worse time complexity: O(n)
