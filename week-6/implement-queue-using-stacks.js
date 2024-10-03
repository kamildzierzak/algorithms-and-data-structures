// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
}

// O(1)
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

// O(1)
MyQueue.prototype.pop = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};

// O(1)
MyQueue.prototype.peek = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2[this.stack2.length - 1];
};

// O(1)
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

// Space complexity: O(n)
// class MyQueue {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }
// }

// // O(n)
// MyQueue.prototype.push = function (x) {
//   while (this.stack1.length > 0) {
//     this.stack2.push(this.stack1.shift());
//   }

//   this.stack2.push(x);

//   while (this.stack2.length > 0) {
//     this.stack1.push(this.stack2.shift());
//   }
// };

// // O(1)
// MyQueue.prototype.pop = function () {
//   return this.stack1.shift();
// };

// // O(1)
// MyQueue.prototype.peek = function () {
//   return this.stack1[0];
// };

// // O(1)
// MyQueue.prototype.empty = function () {
//   return this.stack1.length === 0;
// };
