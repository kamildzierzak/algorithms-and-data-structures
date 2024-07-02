class List {
  constructor() {} // initialize empty list
  add(element) {} // add element to the end of the list
  insert(element, index) {} // insert element at index
  removeAt(index) {} // remove element at index
  get(index) {} // get element at index
  set(element, index) {} // set element at index
  get size() {} // get number of elements
  clear() {} // remove all elements
  contains(element) {} // check if element is in the list
  reverse() {} // reverse the list
  [Symbol.iterator]() {}
  // iterator returns an object { next: () => ({ value: any, done: boolean }) }
  // next is a function that returns an object { value: any, done: boolean }.
  // value is the current element, and after returning it, the index should be incremented.
  // if there is an element at the current index, done = false, otherwise done = true.
  // variables defined in the iterator won't be reinitialized and can have their values changed within the next function.
  // you can test it using a for...of loop.
}

// Tasks:
// 1. Implement the List class according to the above interface.
// 2. Implement tests. (optional)
// 3. Write the time and space complexity of each method. (optional)

// Notes:
// - Restrict the solution to work on the primitive types.
// - Pay attention to edge cases, such as clearing an empty list, removing a non-existent element, modifying an element at a non-existent index, etc.
// - Do not use any array functions; instead, create a new array with a different size, and search/count elements using loops.
// - Additional task: The constructor creates an array of a certain size, e.g., 5, and when this size is exceeded, the size is doubled. You may need variables to store the current and maximum array size.
