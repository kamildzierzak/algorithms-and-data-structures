// Best time complexity: Ω(n)
// Average time complexity: Θ(n)
// Worse time complexity: O(n)
// Space complexity: O(1)
const trap = height => {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftHeight = 0;
  let rightHeight = 0;
  let water = 0;

  while (leftPointer < rightPointer) {
    console.log(leftPointer, rightPointer, water);

    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] >= leftHeight) {
        leftHeight = height[leftPointer];
      } else {
        water += leftHeight - height[leftPointer];
      }
      leftPointer++;
    } else {
      if (height[rightPointer] >= rightHeight) {
        rightHeight = height[rightPointer];
      } else {
        water += rightHeight - height[rightPointer];
      }
      rightPointer--;
    }
  }

  return water;
};

const test = [
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  [4, 2, 0, 3, 2, 5],
];

test.forEach(height => {
  console.log(trap(height));
});
