function swap(array, index1, index2) {
  let keeper = array[index1];

  array[index1] = array[index2];
  array[index2] = keeper;
}

module.exports = swap;
