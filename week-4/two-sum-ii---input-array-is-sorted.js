// Best time complexity: Ω(1)
// Average time complexity: Θ(n)
// Worse time complexity: O(n)
// Space complexity: O(1)
const twoSum = (numbers, target) => {
  let firstPointer = 0;
  let secondPointer = numbers.length - 1;

  while (firstPointer < numbers.length && secondPointer > -1) {
    let sum = numbers[firstPointer] + numbers[secondPointer];

    if (sum === target) {
      return [firstPointer, secondPointer];
    } else if (sum < target) {
      firstPointer++;
    } else {
      secondPointer--;
    }
  }
};
