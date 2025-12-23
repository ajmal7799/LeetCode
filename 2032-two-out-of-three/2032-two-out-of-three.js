/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let result = []

for(let i=0; i<nums1.length; i++) {
    for(let j=0; j<nums2.length; j++) {
        if(nums1[i] == nums2[j] && !result.includes(nums2[j])) {
            
                result.push(nums2[j])
            
        }
        for(let k=0; k<nums3.length; k++) {
            if(nums1[i] == nums3[k] && !result.includes(nums3[k])) {
                result.push(nums3[k])
            }
            if(nums2[j]==nums3[k] && !result.includes(nums3[k])) {
                result.push(nums3[k])
            }
        }
    }
    
}
return result 
};