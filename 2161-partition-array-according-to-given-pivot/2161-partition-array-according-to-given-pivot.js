/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let left = []
    let right = []
    let equle = []

  for(let i=0;i<nums.length;i++){
    if(nums[i]<pivot){
        left.push(nums[i])
    }else if(nums[i]>pivot){
        right.push(nums[i])
    }else{
        equle.push(nums[i])
    }

  }
 return [...left,...equle,...right]
  
    
};