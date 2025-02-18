// lis-binary-search.js for the optimized binary search approach

//  Binary Search + Dynamic Programming 

export function lengthofLISBinarySearch(nums) {
    let sub = [];

    for (let num of nums) {
        let left = 0, right = sub.length;

        while (left < right) {
            let mid = Math.floor((left + right)/2);
            if (sub[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left < sub.length) {
            sub[left] = num; // Replace element
        } else {
            sub.push(num); // Extend the subsequence
        }
    }

    return sub.length;
}