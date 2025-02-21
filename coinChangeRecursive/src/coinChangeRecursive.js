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