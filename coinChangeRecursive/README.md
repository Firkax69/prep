**Recursive memoization**

The problem is to find the minimum number of coins needed to make a given amount using coins of specific denominations. If it's not possible, return string about that.


"remaining" refers to the amount of money that still needs to be made up using the given coin denominations. The variable remaining is passed as an argument to the helper function, helper().


Recursive Calls: In the helper() function, the logic proceeds by subtracting each coin denomination from the remaining amount (i.e., remaining - coin). This reduction of remaining happens inside the loop:

minCoins = Math.min(minCoins, helper(remaining - coin) + 1);


*Why Does It Return the Best Combination?*

Uses Math.min() to Keep the Best Solution:
Every recursive call picks the minimum of all possible paths.
Math.min()


---- ---- ---- ---- ----
Example: coinChangeRecursive([1, 2, 5], 11)

We need to make 11 using [1, 2, 5].

First Recursive Call: helper(11)
For remaining = 11, the function will try each coin:

For coin 1: it calls helper(11 - 1) which is helper(10).
For coin 2: it calls helper(11 - 2) which is helper(9).
For coin 5: it calls helper(11 - 5) which is helper(6).
At this point, we have three recursive calls:

minCoins = Math.min(helper(10) + 1, helper(9) + 1, helper(6) + 1);
....
Continue Down the Recursive Tree:

helper(0) will return 0, as no coins are needed when the remaining amount is 0.
helper(<0) will return Infinity, because that amount cannot be made with the coins.


Once a helper() call has been computed for a particular remaining value, the result is stored in the memo map to avoid recalculating it in future calls. This significantly reduces the time complexity by avoiding redundant calculations.

For example, after computing helper(9) for the first time, the result is stored in memo:

memo.set(9, 3); // memoized result for 9
So, in future calls to helper(9), it will directly return 3 from the memo map instead of recalculating the entire recursive tree.



Diagram look like that:
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




***To run test:***

1. npm install --save-dev jest
installs Jest as a development dependency (--save-dev) in your project. This means it will be listed under "devDependencies" in your package.json file.

2. Configure ES Modules (import/export and specify type:module in package.json).

3. npm install --save-dev jest babel-jest @babel/preset-env
Install jest and babel-jest

4. Create a Babel Configuration File
Since Jest needs Babel to transform ES modules, create a .babelrc file in your project root

.babelrc

{
  "presets": ["@babel/preset-env"]
}

5. npm test and it should run the tests.


