// https://en.wikipedia.org/wiki/Catalan_number
// Best time complexity: Ω(4^n / √n)
// Average time complexity: Θ(4^n / √n)
// Worse time complexity: O(4^n / √n)
// Space complexity: O(4^n / √n)
const generateParenthesis = n => {
  const result = [];

  const backtract = (current, openCount, closeCount) => {
    // If all the parentheses are used add the current string to the result
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // If we can add an open parenthesis
    if (openCount < n) {
      backtract(current + "(", openCount + 1, closeCount);
    }

    // If we can add a close parenthesis
    if (closeCount < openCount) {
      backtract(current + ")", openCount, closeCount + 1);
    }
  };

  backtract("", 0, 0);

  return result;
};
