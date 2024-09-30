export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = partition(arr, 0, arr.length - 1);

  const left = quickSort(arr.slice(0, pivot));
  const right = quickSort(arr.slice(pivot + 1));

  return [...left, arr[pivot], ...right];
}

function partition(arr, low, high) {
  //Different pivot selection strategies
  //1. Always pick first element as pivot
  // let pivot = arr[low];
  //2. Always pick last element as pivot
  let pivot = arr[high];
  //3. Pick a random element as pivot
  // let pivot = arr[Math.floor(Math.random() * (high - low + 1)) + low];
  //4. Pick median as pivot
  // let pivot = Math.floor((low + high) / 2);
  let i = low - 1;

  // Move all elements smaller than pivot to the low
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap the pivor with the greater element
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}
