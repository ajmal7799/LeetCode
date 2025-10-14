/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let count = 0
    let result = []
    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {
            if(nums1[i]==nums2[j]) {
                count++
                break
            }
        }
    }
    if(count==0) {
        result.push(0)
    }else {
        result.push(count)
    }

    count = 0
    for(let j=0; j<nums2.length; j++) {
         for(let i=0; i<nums1.length; i++) {
            if(nums2[j]==nums1[i]) {
                count++
                break
            }
         }
    }
    if(count==0) {
        result.push(0)
    }else {
        result.push(count)
    }
    return result
};