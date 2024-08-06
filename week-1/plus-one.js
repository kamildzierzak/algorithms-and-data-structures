let plusOne = function (digits) {
  // O(1)
  let acc = 0;

  // O(n)
  for (let i = digits.length - 1; i >= 0; i--) {
    // O(1)
    if (digits[i] < 9) {
      digits[i]++;
      break;
    } else if (digits[i] === 9 && i === 0) {
      acc = 1;
      digits[i] = 0;
      break;
    } else if (digits[i] === 9) {
      digits[i] = 0;
    }
  }

  // O(n)
  if (digits[0] === 0) {
    return [acc, ...digits];
  }

  return digits;
};

// Worse time complexity: O(n)
