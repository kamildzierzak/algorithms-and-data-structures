// Worse time complexity: O(n)
// Space complexity: O(n)
const isAnagram = function (s, t) {
  // O(1)
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  // O(n)
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  // O(n)
  for (let j = 0; j < t.length; j++) {
    if (map.get(t[j]) && map.get(t[j]) - 1 !== -1) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      return false;
    }
  }

  return true;
};

// // Worse time complexity: O(n log n)
// const isAnagram = function (s, t) {
//   // O(1)
//   if (s.length !== t.length) {
//     return false;
//   }

//   // O(n) . O(n log n)
//   const sortedS = [...s].sort();
//   const sortedT = [...t].sort();

//   // O(n)
//   for (let i = 0; i < s.length; i++) {
//     if (sortedS[i] !== sortedT[i]) {
//       return false;
//     }
//   }

//   return true;
// };
