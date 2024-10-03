// You must implement a solution with O(1) time complexity for each function.

// Space complexity: O(n)
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
}

// O(1)
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length > 0) {
    if (val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  } else {
    this.minStack.push(val);
  }
};

// O(1)
MinStack.prototype.pop = function () {
  let popped = this.stack.pop();

  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

// O(1)
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

// O(1)
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
