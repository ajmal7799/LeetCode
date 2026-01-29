/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;

  const expectedsum = (n* (n+1)) /2;
  console.log(expectedsum)
  const actualSum = nums.reduce((sum,num)=> sum+num ,0)

return expectedsum - actualSum

};



