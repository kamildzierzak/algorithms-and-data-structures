// Best time complexity: Ω(1)
// Average time complexity: Θ(n log m)
// Worse time complexity: O(n log m)
// Space complexity: O(1)
const minEatingSpeed = (piles, h) => {
  piles.sort((a, b) => a - b);

  let low = 1;
  let high = piles[piles.length - 1];

  while (low < high) {
    let middle = Math.floor((low + high) / 2);

    // if koko can finish on middle, we can try to find even lower speed, if not we need to increased low boundary
    if (canAteOnTime(piles, middle, h)) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  return low;
};

// to check if koko can finish eating withing h time eating k bananas
const canAteOnTime = (piles, k, h) => {
  let total = 0;
  for (let i = 0; i < piles.length; i++) {
    total += Math.ceil(piles[i] / k);
  }

  return total <= h;
};

const test = [
  {
    piles: [3, 6, 7, 11],
    h: 8,
  },
  {
    piles: [30, 11, 23, 4, 20],
    h: 5,
  },
  {
    piles: [30, 11, 23, 4, 20],
    h: 6,
  },
];

test.forEach(({ piles, h }) => {
  console.log(minEatingSpeed(piles, h));
});
