const isAnagram = function (s, t) {
  // O(1)
  if (s.length !== t.length) {
    return false;
  }

  // O(n) . O(n log n)
  const sortedS = [...s].sort();
  const sortedT = [...t].sort();

  // O(n)
  for (let i = 0; i < s.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
};

// Worse time complexity: O(n log n)
