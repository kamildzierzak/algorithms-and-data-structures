// Best time complexity: Ω(n log n)
// Average time complexity: Θ(n log n)
// Worse time complexity: O(n log n)
// Space complexity: O(n)
const carFleet = (target, position, speed) => {
  let cars = position.map((pos, i) => [pos, speed[i]]);
  let stack = [];

  cars.sort((a, b) => b[0] - a[0]);

  for (let [p, s] of cars) {
    let timeToReach = (target - p) / s;

    // We are pushing only when a slower car/fleet can't catch up to the car/fleet ahead
    if (stack.length === 0 || timeToReach > stack[stack.length - 1]) {
      stack.push(timeToReach);
    }
  }

  return stack.length;
};

const test = [
  { target: 12, position: [10, 8, 0, 5, 3], speed: [2, 4, 1, 1, 3] },
  { target: 10, position: [6, 8], speed: [3, 2] },
];

test.forEach(({ target, position, speed }) => {
  console.log(carFleet(target, position, speed));
});
