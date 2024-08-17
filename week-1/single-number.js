// Worse time complexity: O(n)
// Space complexity: O(1)
// XOR way
let singleNumber = nums => {
  let theChoosenOne = nums[0];

  // O(n)
  for (let i = 1; i < nums.length; i++) {
    theChoosenOne = theChoosenOne ^ nums[i];
  }

  return theChoosenOne;
};

// // Worse time complexity: O(n log n)
// let singleNumber = function (nums) {
//   // O(n log n)
//   nums.sort((x, y) => x - y);

//   // O(n)
//   for (let i = 0; i < nums.length; i += 2) {
//     // O(1)
//     if (nums[i] !== nums[i + 1]) {
//       return nums[i];
//     }
//   }
// };
