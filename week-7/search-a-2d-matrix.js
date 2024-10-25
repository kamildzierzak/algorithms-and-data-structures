const searchMatrix = (matrix, target) => {
  let array = matrix[matrix.length - 1];

  for (let i = 1; i < matrix.length; i++) {
    let firstElement = matrix[i][0];

    if (firstElement > target) {
      array = matrix[i - 1];
      break;
    }
  }

  let low = 0;
  let high = array.length - 1;

  console.log(array);

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    let value = array[middle];

    if (value < target) {
      low = middle + 1;
    } else if (value > target) {
      high = middle - 1;
    } else {
      return true;
    }
  }

  return false;
};

let test = [[1, 3]];

console.log(searchMatrix(test, 3));
