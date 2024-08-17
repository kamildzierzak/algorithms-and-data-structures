const isPalindrome = s => {
  // remove non-alphanumeric characters
  // convert to lowercase
  const result = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // two pointers
  let firstPointer = 0;
  let secondPointer = result.length - 1;

  // empty string case
  if (result.length === 0) {
    return true;
  }

  // checking if it is palindrom
  while (firstPointer < result.length && secondPointer > -1) {
    if (result[firstPointer] !== result[secondPointer]) {
      return false;
    }
    firstPointer++;
    secondPointer--;
  }

  return true;
};

// const test = ["A man, a plan, a canal: Panama", "race a car", " "];

// test.map(s => {
//   console.log(isPalindrome(s));
// });
