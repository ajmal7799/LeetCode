/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    nums.sort((a,b)=> b-a)

    const result = []
    for(let n of nums) {
        if(!result.includes(n)) {
            result.push(n)
            if(result.length == k) {
                break
            }
        }
    }
    return result
};