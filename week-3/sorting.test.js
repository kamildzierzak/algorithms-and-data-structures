import bubble from "./bubble-sort";
import insertionSort from "./insertion-sort";
import selectionSort from "./selection-sort";

describe("Sorting algorithms:", () => {
  let randomArray, sortedArray;

  beforeEach(() => {
    randomArray = [
      34, 7, 23, 32, 5, 62, 32, 53, 31, 87, 54, 29, 65, 14, 76, 34, 23, 12, 92,
      43, 66, 78, 90, 11, 8, 10, 56, 73, 28, 45, 34, 67, 82, 21, 74, 33, 27, 68,
      77, 99, 100, 88, 41, 19, 15, 22, 3, 9, 49, 60,
    ];
    sortedArray = [
      3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 19, 21, 22, 23, 23, 27, 28, 29, 31, 32,
      32, 33, 34, 34, 34, 41, 43, 45, 49, 53, 54, 56, 60, 62, 65, 66, 67, 68,
      73, 74, 76, 77, 78, 82, 87, 88, 90, 92, 99, 100,
    ];
  });

  describe("1. Bubble sort:", () => {
    test("should sort an unordered array into ascending order array", () => {
      const bubbled = bubble(randomArray);
      expect(bubbled).toEqual(sortedArray);
    });
  });

  describe("2. Selection sort:", () => {
    test("should sort an unordered array into ascending order array", () => {
      const selected = selectionSort(randomArray);
      expect(selected).toEqual(sortedArray);
    });
  });

  describe("3. Insertion sort:", () => {
    test("should sort an unordered array into ascending order array", () => {
      const insterted = insertionSort(randomArray);
      expect(insterted).toEqual(sortedArray);
    });
  });
});
