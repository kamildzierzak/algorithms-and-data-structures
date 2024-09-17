// Best time complexity: Ω(n)
// Average time complexity: Θ(n^2)
// Worse time complexity: O(n^2)
// Space complexity: O(1)
function insertionSort(array) {
  const copy = [...array];

  for (let i = 1; i < copy.length; i++) {
    let current = copy[i];
    let index = i - 1;

    while (index >= 0 && current < copy[index]) {
      copy[index + 1] = copy[index];
      --index;
    }

    copy[index + 1] = current;
  }

  return copy;
}

export default insertionSort;
