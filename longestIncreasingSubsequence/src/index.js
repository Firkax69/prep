import { lengthOfLISDP } from "./lis-dp.js";
import { lengthofLISBinarySearch } from "./lis-binary-search.js";

const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
const nums2 = [0, 1, 0, 3, 2, 3];
const nums3 = [7,7,7,7,7,7,7];


console.log("Using Dynamic Programming:", lengthOfLISDP(nums1));  // Output: 4


console.log("Using Dynamic Programming:", lengthOfLISDP(nums2));  // Output: 4


console.log("Using Dynamic Programming:", lengthOfLISDP(nums3));  // Output: 1
