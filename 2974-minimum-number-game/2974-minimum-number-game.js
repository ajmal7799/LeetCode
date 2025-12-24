/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let num1 = []
let num2 = []
let result = []
nums.sort((a,b)=> a-b);
for(let i=0; i<nums.length; i++) {
    if(!num2.includes(nums[i])){
        num1.push(nums[i])
         num2.push(nums[i+1])
    }
    
}
for(let j=0; j<num2.length; j++) {
    result.push(num2[j],num1[j])
}
return result
};