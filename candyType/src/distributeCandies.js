// Helper function to count unique candy types

function countUniqueCandies(candyType) {
    return new Set(candyType).size
}

// Helper function to calculate the result
function calculateMaxCandies(uniqueCount, n) {
    return Math.min(uniqueCount, n / 2);
}

// Main function to distribute candies
function distributeCandies(candyType) {
    const uniqueCandies = countUniqueCandies(candyType); // Step 1: Count unique candy types
    const result = calculateMaxCandies(uniqueCandies, candyType.length); // Step 2: Calculate the max candies Alice can eat
    return result;
}

export default distributeCandies