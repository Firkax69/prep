**Binary Search + Dynamic Programming**
*Longest Increasing subsequence*

lis-dp.js contains solution using Dynamic Programming Approach

    We maintain an array dp where dp[i] represents the length of the longest increasing subsequence that ends at index i.

    For each element, check all previous elements and update the dp array accordingly.

    The result will be the maximum value in the dp array.


More clear to understand:

lis-binry-search.js solution using Dinamic approach + binary search

    We use an array to store the smallest possible end element for increasing subsequences of different lengths.
    
    Use binary search to efficiently find the position to replace elements.

1. Iterate through the numbers and use binary search to determine where to place them in the sub array.
2. If the element is larger than all in sub, append it.
3. If a position is found using binary search, replace the element at that position.
4. The final length of sub represents the LIS length.