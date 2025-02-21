**Recursive memoization**

The problem is to find the minimum number of coins needed to make a given amount using coins of specific denominations. If it's not possible, return string about that.

*Why Does It Return the Best Combination?*

Uses Math.min() to Keep the Best Solution:
Every recursive call picks the minimum of all possible paths.

Memoization Avoids Recomputing:
The function remembers the best solution for each amount (avoiding unnecessary recalculations).


---- ---- ---- ---- ----
Example: coinChangeRecursive([1, 2, 5], 11)

We need to make 11 using [1, 2, 5].

helper(11)
  ├── helper(10)  (using 1)
  │     ├── helper(9) (using 1)
  │     │     ├── ... (until 0)
  │
  ├── helper(9) (using 2)
  │     ├── helper(7) (using 2)
  │     │     ├── ... (until 0)
  │
  ├── helper(6) (using 5)
        ├── helper(1) (using 5)
