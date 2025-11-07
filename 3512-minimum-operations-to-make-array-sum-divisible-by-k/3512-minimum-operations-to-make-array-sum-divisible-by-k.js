/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

     let sum = nums.reduce((acc,curr)=> acc + curr ,0)

if(sum % k == 0) {
    return 0
}else if(sum <= k) {
    return sum
}else{
   let count = 0
   for(let i=0; i<sum; i++) {
       
       if(sum%k==0) {
           return count
       }
       sum--
       count++
   }
}
};