// Worse time complexity: O(n)
// Space complexity: O(n)
let twoSum = function (nums, target) {
  const map = new Map();
  let firstIndex;
  let secondIndex;

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];

    if (map.get(nums[i]) !== undefined) {
      firstIndex = map.get(nums[i]);
      secondIndex = i;
      break;
    } else {
      map.set(result, i);
    }
  }

  return [firstIndex, secondIndex];
};

// // Worse time complexity: O(n^2)
// let twoSum = function (nums, target) {
//   let firstIndex;
//   let secondIndex;

//   // O(n^2)
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target === nums[i] + nums[j]) {
//         firstIndex = i;
//         secondIndex = j;
//       }
//     }
//   }

//   return [firstIndex, secondIndex];
// };
