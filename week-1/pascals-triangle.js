/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = numRows => {
  // To fix Time Limit Exceeded error, i'm using memoization
  // to store the result of the recursive function
  // O(1)
  const memo = {};
  const result = [];

  // Helper recursive function to count the number based on the indices (x, y)
  // O(1) - after initial computation
  // Without memoization, the time complexity would be exponential because each call to countUp makes two recursive calls.
  // With memoization, each unique (x, y) pair is computed only once and stored in memo.
  const countUp = (x, y) => {
    if (y === 0 || y == x) {
      return 1;
    }

    const key = `${x}-${y}`;

    if (key in memo) {
      return memo[key];
    }

    memo[key] = countUp(x - 1, y - 1) + countUp(x - 1, y);
    return memo[key];
  };

  // O(n^2)
  for (let i = 0; i < numRows; i++) {
    const current = [];

    for (let j = 0; j <= i; j++) {
      current.push(countUp(i, j));
    }
    result.push(current);
  }

  return result;
};

// Worse time complexity: O(n^2)
