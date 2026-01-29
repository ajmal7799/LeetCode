/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a=nums.filter((acc,index,arr)=> arr.indexOf(acc)==arr.lastIndexOf(acc))
  let aa=a[0];
   return aa
};