// Best time complexity: Ω(n)
// Average time complexity: Θ(n)
// Worse time complexity: O(n)
// Space complexity: O(n)
const evalRPN = tokens => {
  const operators = new Set(["+", "-", "*", "/"]);
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (operators.has(tokens[i])) {
      let a = stack.pop();
      let b = stack.pop();

      switch (tokens[i]) {
        case "+":
          stack.push(b + a);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(b * a);
          break;
        case "/":
          stack.push(Math.trunc(b / a));
          break;
      }
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack[0];
};
