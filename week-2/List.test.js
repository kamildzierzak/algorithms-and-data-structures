import List from "./List";

describe("List", () => {
  let list;

  beforeEach(() => {
    list = new List(2);
  });

  test("should create an empty list", () => {
    let emptyList = new List();
    expect(emptyList.size).toEqual(0);
  });

  test("should add an element to the list", () => {
    list.add(314);
    list.add(159);
    list.add(155);
    expect(list.elements).toEqual([314, 159, 155]);
  });

  test("should insert element at index", () => {
    list.add(111);
    list.add(222);
    list.insert(333, 1);
    expect(list.get(0)).toEqual(111);
    expect(list.get(1)).toEqual(333);
    expect(list.get(2)).toEqual(222);
  });

  test("should throw error if inserting at index out of bounds", () => {
    expect(() => list.insert(1, 3)).toThrow("Index out of bounds.");
  });

  test("should remove element at index", () => {
    list.add(3);
    list.add(4);
    list.removeAt(0);
    expect(list.get(0)).toEqual(undefined);
    expect(list.get(1)).toEqual(4);
  });

  test("should throw error if removing from index out of bounds", () => {
    expect(() => list.removeAt(3)).toThrow("Index out of bounds.");
  });

  test("should return element from list at index", () => {
    list.add(314);
    expect(list.get(0)).toEqual(314);
  });

  test("should throw error if get index out of bounds", () => {
    expect(() => list.get(3)).toThrow("Index out of bounds.");
  });

  test("should set element at specific index", () => {
    list.add(1);
    list.set(123, 0);
    expect(list.get(0)).toEqual(123);
  });

  test("should throw error if set index out of bound", () => {
    expect(() => list.set(12, 3)).toThrow("Index out of bounds.");
  });

  test("should return list size", () => {
    list.add(512);
    list.add(124);
    expect(list.size).toEqual(2);
  });

  test("should clear all elements from list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.clear();
    expect(list.elements).toEqual([]);
    expect(list.size).toEqual(0);
  });

  test("should be able to check if list contains element", () => {
    list.add(7);
    expect(list.contains(7)).toEqual(true);
  });

  test("should be able to check if list doesn't contains element", () => {
    list.add(1);
    expect(list.contains(7)).toEqual(false);
  });

  test("should reverse the list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.reverse();
    expect(list.elements).toEqual([3, 2, 1]);
  });

  test("should iterate over all elements in the list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    let sum = 0;
    for (let element of list) {
      if (element === undefined) {
        continue;
      }
      sum += element;
    }
    expect(sum).toEqual(6);
  });
});
