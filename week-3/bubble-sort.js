import { swap } from "../utils.js";

// Best time complexity: Ω(n)
// Average time complexity: Θ(n^2)
// Worse time complexity: O(n^2)
// Space complexity: O(1)
function bubble(array) {
  const copy = [...array];
  let swapped = false;

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - i; j++) {
      if (copy[j] > copy[j + 1]) {
        swap(copy, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return copy;
}

export default bubble;
