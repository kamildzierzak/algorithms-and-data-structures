import swap from "./swap.js";

// Best time complexity: Ω(n^2)
// Average time complexity: Θ(n^2)
// Worse time complexity: O(n^2)
// Space complexity: O(1)
function selectionSort(array) {
  const copy = [...array];

  for (let i = 0; i < copy.length; i++) {
    let min = i;
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[min] > copy[j]) {
        min = j;
      }
    }
    swap(copy, i, min);
  }

  return copy;
}

export default selectionSort;
