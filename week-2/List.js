class List {
  #elements;
  #currentSize;
  #maximumSize;

  // initialize empty list with maximum size of x || 2
  constructor(maximumSize) {
    this.#currentSize = 0;
    this.#maximumSize = maximumSize || 2;
    this.#elements = new Array(this.#currentSize);
  }

  // add element to the end of the list
  add(element) {
    if (this.#currentSize === this.#maximumSize) {
      this.resize();
    }

    this.#elements[this.#currentSize] = element;
    this.#currentSize++;
  }

  // insert element at index
  insert(element, index) {}

  removeAt(index) {} // remove element at index
  get(index) {} // get element at index
  set(element, index) {} // set element at index

  // get number of elements
  get size() {
    return this.#elements.length;
  }

  clear() {} // remove all elements
  contains(element) {} // check if element is in the list
  reverse() {} // reverse the list
  [Symbol.iterator]() {} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol

  get elements() {
    return this.#elements;
  }

  resize() {
    this.#maximumSize = this.#maximumSize * 2;
    const newList = new Array(this.#maximumSize);

    for (let i = 0; i < this.#elements.length; i++) {
      newList[i] = this.#elements[i];
    }

    this.#elements = newList;
  }
}

export default List;

// Tasks:
// Implement the List class according to the above interface.
// Optional: Implement tests.
// Optional: Write the time and space complexity of each method.

// Notes:
// You can use the Array constructor to define the array of a specific size.
// Restrict the solution to work on the primitive types.
// Pay attention to edge cases, such as clearing an empty list, removing a non-existent element, modifying an element at a non-existent index, etc.
// Do not use any array functions; instead, create a new array with a different size, and search/count elements using loops.
// Optional: The constructor creates an array of a certain size, eg. 5, and when this size is exceeded, the size is doubled. You may need variables to store the current and maximum array size.
