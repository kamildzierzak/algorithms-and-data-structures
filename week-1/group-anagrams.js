// Best time complexity: Ω(n * k)
// Average time complexity: Θ(n * k)
// Worse time complexity: O(n * k)
// Space complexity: O(n * k)
//
const groupAnagrams = strs => {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    // Keys created by counting frequency of characters
    let keyString = stringToKey(strs[i]);

    if (map.has(keyString)) {
      map.get(keyString).push(strs[i]);
    } else {
      map.set(keyString, [strs[i]]);
    }
  }

  return Array.from(map.values());
};

const stringToKey = str => {
  const count = new Array(26).fill(0);

  for (let char of str) {
    count[char.charCodeAt(0) - 97]++;
  }

  return count.join("-");
};

// Best time complexity: Ω(n * k log k)
// Average time complexity: Θ(n * k log k)
// Worse time complexity: O(n * k log k)
// Space complexity: O(n * k)
// const groupAnagrams = strs => {
//   const map = new Map();
//   const result = [];

//   for (let i = 0; i < strs.length; i++) {
//     // Keys created by sorting each word
//     let sortedWord = strs[i].split("").sort().join("");

//     if (map.get(sortedWord)) {
//       map.set(sortedWord, [...map.get(sortedWord), strs[i]]);
//     } else {
//       map.set(sortedWord, [strs[i]]);
//     }
//   }

//   map.forEach(value => {
//     result.push(value);
//   });

//   return result;
// };

const strs = [["eat", "tea", "tan", "ate", "nat", "bat"], [""], ["a"]];

strs.forEach(str => {
  groupAnagrams(str);
});
