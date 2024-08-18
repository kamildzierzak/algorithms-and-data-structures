const twoSum = (numbers, target) => {
  let firstPointer = 0;
  let secondPointer = numbers.length - 1;

  while (firstPointer < numbers.length && secondPointer > -1) {
    let sum = numbers[firstPointer] + numbers[secondPointer];

    if (sum === target) {
      return [++firstPointer, ++secondPointer];
    } else if (sum < target) {
      firstPointer++;
      continue;
    } else {
      secondPointer--;
      continue;
    }
  }
};
