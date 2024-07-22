/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = numRows => {
  // To fix Time Limit Exceeded error, i'm using memoization
  // to store the result of the recursive function
  const memo = {};
  const result = [];

  // Helper recursive function to count the number based on the indices (x, y)
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

  for (let i = 0; i < numRows; i++) {
    const current = [];

    for (let j = 0; j <= i; j++) {
      current.push(countUp(i, j));
    }
    result.push(current);
  }

  return result;
};
