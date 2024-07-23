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
  insert(element, index) {
    if (index < 0 || index >= this.#currentSize) {
      throw new Error("Index out of bounds.");
    }

    if (this.#currentSize + 1 === this.#maximumSize) {
      this.resize();
    }

    const newList = new Array(this.#maximumSize);

    for (let i = 0; i < index; i++) {
      newList[i] = this.#elements[i];
    }

    newList[index] = element;

    for (let j = index + 1; j < this.#currentSize + 1; j++) {
      newList[j] = this.#elements[j - 1];
    }

    this.#elements = newList;
    this.#currentSize++;
  }

  // remove element at index
  removeAt(index) {
    if (index < 0 || index >= this.#currentSize) {
      throw new Error("Index out of bounds.");
    }

    this.#elements[index] = undefined;
  }

  // get element at index
  get(index) {
    if (index < 0 || index >= this.#currentSize) {
      throw new Error("Index out of bounds.");
    }

    return this.#elements[index];
  }

  // set element at index
  set(element, index) {
    if (index < 0 || index >= this.#currentSize) {
      throw new Error("Index out of bounds.");
    }

    this.#elements[index] = element;
  }

  // get number of elements
  get size() {
    return this.#elements.length;
  }

  // remove all elements
  clear() {
    const newList = new Array(this.#maximumSize);
    this.#elements = newList;
  }

  // check if element is in the list
  contains(element) {
    for (let i = 0; i < this.#currentSize; i++) {
      if (element === this.#elements[i]) {
        return true;
      }
    }
    return false;
  }

  // reverse the list
  reverse() {
    const newList = new Array(this.#maximumSize);

    for (let i = 0; i < this.#currentSize; i++) {
      newList[i] = this.#elements[this.#currentSize - 1 - i];
    }

    this.#elements = newList;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol
  [Symbol.iterator]() {
    let index = 0;
    const elements = this.#elements;

    return {
      next() {
        if (index < elements.length) {
          return { value: elements[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

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
