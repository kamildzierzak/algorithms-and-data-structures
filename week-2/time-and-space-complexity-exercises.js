function sumArray(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

function findMax(arr) {
  let maxElement = arr[0];

  for (let num of arr) {
    if (num > maxElement) {
      maxElement = num;
    }
  }

  return maxElement;
}

function copyArray(arr) {
  let newArr = [];

  for (let num of arr) {
    newArr.push(num);
  }

  return newArr;
}

function uniqueElements(arr) {
  let uniqueSet = new Set();

  for (let num of arr) {
    uniqueSet.add(num);
  }

  return Array.from(uniqueSet);
}
