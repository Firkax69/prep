// Helper function to count unique candy types

// function countUniqueCandies(candyType) {
//     return new Set(candyType).size // remove all diplicates
// }

// // Helper function to calculate the result
// function calculateMaxCandies(uniqueCount, n) {
//     return Math.min(uniqueCount, n / 2);
// }

// // Main function to distribute candies
// export function distributeCandies(candyType) {
//     const uniqueCandies = countUniqueCandies(candyType); // Step 1: Count unique candy types
//     return calculateMaxCandies(uniqueCandies, candyType.length); // Step 2: Calculate the max candies Alice can eat
// }



// ** Shortened  **

export function distributeCandies(candyType) {
    return Math.min(new Set(candyType).size, candyType.length/2)
}