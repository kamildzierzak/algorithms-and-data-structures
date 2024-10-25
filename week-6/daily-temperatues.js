// Best time complexity: Ω(n)
// Average time complexity: Θ(n)
// Worse time complexity: O(n)
// Space complexity: O(n)
const dailyTemperatures = temperatures => {
  const stack = [];
  const answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    // As long as the current temp is > temp at the top of the stack
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop();
      // Assign difference between popped index and current index
      answer[j] = i - j;
    }

    stack.push(i);
  }

  return answer;
};
