const threeSum = nums => {
  const triplets = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    const target = -sortedNums[i];
    let firstPointer = i + 1;
    let secondPointer = sortedNums.length - 1;

    while (firstPointer < secondPointer) {
      let sum = sortedNums[firstPointer] + sortedNums[secondPointer];

      if (sum === target) {
        let firstNum = sortedNums[i];
        let secondNum = sortedNums[firstPointer];
        let thirdNum = sortedNums[secondPointer];

        triplets.push([firstNum, secondNum, thirdNum]);

        while (
          firstPointer < secondPointer &&
          secondNum === sortedNums[firstPointer + 1]
        )
          firstPointer++;
        while (
          firstPointer < secondPointer &&
          thirdNum === sortedNums[secondPointer - 1]
        )
          secondPointer--;

        firstPointer++;
        secondPointer--;
      } else if (sum < target) {
        firstPointer++;
      } else {
        secondPointer--;
      }
    }
  }

  return triplets;
};
