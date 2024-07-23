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

  // insert
  // remove

  test("should return element from list at index", () => {
    list.add(314);
    expect(list.get(0)).toEqual(314);
  });

  test("should throw error if get index out of bounds", () => {
    expect(() => list.get(3)).toThrow("Index out of bounds.");
  });

  test("should set element at specific index", () => {
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
  });

  // contains
  test("should be able to check if list contains element", () => {
    list.add(7);
    expect(list.contains(7)).toEqual(true);
  });

  test("should be able to check if list doesn't contains element", () => {
    list.add(1);
    expect(list.contains(7)).toEqual(false);
  });

  // reverse
  // iterator
});
