import createMemo from "../utils/memoization.js";

function coinChangeRecursive(coins, amount) {
    let memo = createMemo();

    function helper(remaining) {
        if (remaining < 0) return Infinity;
        if (remaining === 0) return 0;
        if (memo.has(remaining)) return memo.get(remaining);

        let minCoins = Infinity;
        for (let coin of coins) {
            minCoins = Math.min(minCoins, helper(remaining-coin) + 1)
        }

        memo.set(remaining, minCoins);
        return minCoins;
    }

    let result = helper(amount);
    return result === Infinity ? "not possible to achieve this amount with given coins" : result;
}

export default coinChangeRecursive;

// why we use "helper(remaining-coin) + 1" - For example:
//If remaining = 6 and we use coin 1, the new subproblem is remaining = 5.
// Now, when we calculate helper(5), if we find that helper(5) requires 2 coins, we need to add 1 more coin (the 1 coin we just used) to make the total number of coins for remaining = 6.
// Thus, helper(6 - 1) (which is helper(5)) might return 2 coins, and the +1 makes it 3 coins total (1 coin used for remaining = 6 and 2 more coins for the remaining value 5).
