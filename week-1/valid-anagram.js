const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = [...s].sort();
  const sortedT = [...t].sort();

  for (let i = 0; i < s.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
};
