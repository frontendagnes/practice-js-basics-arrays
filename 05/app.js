const numbers = [1, 2, 3, 4, 5, 6, 7];

let result = numbers
  .filter((item) => !(item % 2))
  .reduce((acc, current) => acc + current, 0);

console.log(result);
