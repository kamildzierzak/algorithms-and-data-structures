const removeElement = function (nums, val) {
  let counter = 0;

  nums.forEach((num, index, array) => {
    if (num !== val) {
      array[counter] = num;
      counter++;
    }
  });

  return counter;
};
