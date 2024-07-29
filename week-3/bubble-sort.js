const swap = require("./swap");

function bubble(array) {
  const copy = [...array];

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - i; j++) {
      if (copy[j] > copy[j + 1]) {
        swap(copy, j, j + 1);
      }
    }
  }

  return copy;
}

module.exports = bubble;
