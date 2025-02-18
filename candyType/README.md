**Candy distribution function**

new Set(candyType).size gives the number of unique candy types.

candyType.length / 2 gives the maximum number Alice can eat.

Math.min() ensures Alice eats the maximum possible unique types within her limit.


ES module (ESM)


// TEST cases

describe('distributeCandies', function() {...}) -	Defines a test suite.

it('should return 3...', function() {...})	- 
Defines a test case.

const result = distributeCandies([...]);	- 
Calls the function and stores the result.

expect(result).to.equal(3); -
Checks if the result is correct.