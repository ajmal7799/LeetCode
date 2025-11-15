/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let sa = []
let count = 0
for(let i=0; i<nums.length; i++) {
    if(nums[i]==1){
        count++
    }else if(nums[i]==0){
        sa.push(count)
        count = 0
    }
}
sa.push(count)
return Math.max(...sa)
};