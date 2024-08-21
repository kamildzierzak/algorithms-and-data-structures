const maxArea = array => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let leftHeight = array[leftPointer];
  let rightHeight = array[rightPointer];
  let maxAmount = 0;

  while (leftPointer < rightPointer) {
    let currentAmount = countArea(
      leftPointer,
      array,
      rightPointer,
      rightHeight
    );

    if (currentAmount > maxAmount) {
      maxAmount = currentAmount;
    }

    if (leftHeight < rightHeight) {
      leftPointer++;
      leftHeight = array[leftPointer];
    } else {
      rightPointer--;
      rightHeight = array[rightPointer];
    }
  }

  return maxAmount;
};

const countArea = (firstIndex, firstHeight, secondIndex, secondHeight) => {
  let maxHeight = Math.min(firstHeight, secondHeight);
  let width = Math.abs(secondIndex - firstIndex);
  return maxHeight * width;
};

// const maxArea = array => {
//   let leftPointer = 0;
//   let rightPointer = array.length - 1;
//   let leftHeight = array[leftPointer];
//   let rightHeight = array[rightPointer];
//   let currentAmount = countArea(
//     leftPointer,
//     leftHeight,
//     rightPointer,
//     rightHeight
//   );
//   let maxAmount = currentAmount;

//   while (leftPointer < rightPointer) {
//     if (leftHeight < rightHeight) {
//       leftPointer++;
//       leftHeight = array[leftPointer];
//     } else {
//       rightPointer--;
//       rightHeight = array[rightPointer];
//     }

//     currentAmount = countArea(
//       leftPointer,
//       leftHeight,
//       rightPointer,
//       rightHeight
//     );

//     if (currentAmount > maxAmount) {
//       maxAmount = currentAmount;
//     }
//   }

//   return maxAmount;
// };

// const countArea = (firstIndex, firstHeight, secondIndex, secondHeight) => {
//   let maxHeight = firstHeight < secondHeight ? firstHeight : secondHeight;
//   let width = Math.abs(secondIndex - firstIndex);
//   return maxHeight * width;
// };
