import coinChangeRecursive from "./src/coinChangeRecursive.js";

console.log(coinChangeRecursive([1,2,5], 11));
// Output: 3 (5+5+1)

console.log(coinChangeRecursive([2,5], 3));
// Output: -1 (not possible)

console.log(coinChangeRecursive([1], 0));
// Output: 0 (zero amount needs zero coins)