/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0
for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
        
        if(i<j && nums[i]==nums[j]) {
            let a = i*j
            if(a %k==0) {
                count++
            }
        }
    }
}
return count
};