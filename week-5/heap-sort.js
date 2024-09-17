import { swap } from "../utils.js";

export function heapSort(arr) {
  let n = arr.length;

  for (let i = n / 2 - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  let leftChildIndex = 2 * i + 1;
  let rightChildIndex = 2 * i + 2;

  if (leftChildIndex < n && arr[leftChildIndex] > arr[largest]) {
    largest = leftChildIndex;
  }
  if (rightChildIndex < n && arr[rightChildIndex] > arr[largest]) {
    largest = rightChildIndex;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
}
