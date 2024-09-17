import { heapSort } from "./heap-sort";
import { quickSort } from "./quick-sort";
import { mergeSort } from "./merge-sort";

describe("Sorting algorithms:", () => {
  let randomArray, ascendedSortedArray;

  beforeEach(() => {
    randomArray = [
      34, 7, 23, 32, 5, 62, 32, 53, 31, 87, 54, 29, 65, 14, 76, 34, 23, 12, 92,
      43, 66, 78, 90, 11, 8, 10, 56, 73, 28, 45, 34, 67, 82, 21, 74, 33, 27, 68,
      77, 99, 100, 88, 41, 19, 15, 22, 3, 9, 49, 60,
    ];
    ascendedSortedArray = [
      3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 19, 21, 22, 23, 23, 27, 28, 29, 31, 32,
      32, 33, 34, 34, 34, 41, 43, 45, 49, 53, 54, 56, 60, 62, 65, 66, 67, 68,
      73, 74, 76, 77, 78, 82, 87, 88, 90, 92, 99, 100,
    ];
  });

  describe("1. Heap sort:", () => {
    test("should sort an unordered array into ascending order array", () => {
      const heaped = heapSort(randomArray);
      expect(heaped).toEqual(ascendedSortedArray);
    });
  });

  describe("2. Quick sort:", () => {
    test("should sort an unordered array into ascending order array", () => {
      const quicked = quickSort(randomArray);
      expect(quicked).toEqual(ascendedSortedArray);
    });
  });

  describe("3. Merge sort:", () => {
    test("should sort an unordered array into ascending order array", () => {
      const merged = mergeSort(randomArray);
      expect(merged).toEqual(ascendedSortedArray);
    });
  });
});
