// Best time complexity: Ω(n)
// Average time complexity: Θ(n)
// Worse time complexity: O(n)
// Space complexity: O(n)
const isValid = s => {
  const stack = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      switch (s[i]) {
        case ")":
          if (stack.pop() !== "(") return false;
          break;
        case "}":
          if (stack.pop() !== "{") return false;
          break;
        case "]":
          if (stack.pop() !== "[") return false;
          break;
      }
    }
  }

  return stack.length === 0;
};

// const isValid = s => {
//   const stack = [];
//   const matchingBrackets = { ")": "(", "}": "{", "]": "[" };

//   for (let char of s) {
//     if (char in matchingBrackets) {
//       if (stack.pop() !== matchingBrackets[char]) return false;
//     } else {
//       stack.push(char);
//     }
//   }

//   return stack.length === 0;
// };
