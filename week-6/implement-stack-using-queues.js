// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.

// Space complexity: O(n)
class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
}

// O(n)
MyStack.prototype.push = function (x) {
  this.queue2.push(x);

  while (this.queue1.length > 0) {
    this.queue2.push(this.queue1.shift());
  }

  [this.queue1, this.queue2] = [this.queue2, this.queue1];
};

// O(1)
MyStack.prototype.pop = function () {
  return this.queue1.shift();
};

// O(1)
MyStack.prototype.top = function () {
  return this.queue1[0];
};

// O(1)
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};
