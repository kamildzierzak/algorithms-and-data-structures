let plusOne = function (digits) {
  let acc = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
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

  if (digits[0] === 0) {
    return [acc, ...digits];
  }

  return digits;
};
