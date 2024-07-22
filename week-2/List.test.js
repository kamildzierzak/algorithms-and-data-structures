import List from "./List";

describe("List", () => {
  let list;

  beforeEach(() => (list = new List()));

  test("should create an empty list", () => {
    list = new List();
    expect(list.size).toEqual(0);
  });

  test("should add an element to the list", () => {
    list.add(314);
    list.add(159);
    list.add(155);
    expect(list.elements).toEqual([314, 159, 155]);
  });

  test("should return list size", () => {
    list.add(512);
    list.add(124);
    expect(list.size).toEqual(2);
  });
});
