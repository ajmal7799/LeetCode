/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let needed = []
for(let j=1; j<=k; j++) {
    needed.push(j)
}
let count = 0
let result = []
for(let i=nums.length-1; i>=0; i--) {
     if(needed.includes(nums[i])) {
        result.push(nums[i])
        let index = needed.indexOf(nums[i])
        needed.splice(index,1)
        
          if(needed.length==0) {
             
              count++
              break
          }
        
     }
    count++
}
return count
};