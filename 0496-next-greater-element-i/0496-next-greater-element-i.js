/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
let result = []
let checking = []
for(let i=0; i<nums1.length; i++) {
    let max = 0
    let flag = false
    for(let j=0; j<nums2.length; j++) {
        
        if(nums1[i]==nums2[j]) {
            checking.push(nums2[j])
            flag = true
            let re = 0
            for(let k=j; k<nums2.length; k++) {
                if(k < nums2[k] && !checking.includes(nums2[k])) {
                    re = nums2[k]
                    break
                }
            }
            if(re == 0) {
                result.push(-1)
            }else {
                result.push(re)
            }
            
        }
        if(flag == true) {
            break
        }
        
    }
}
return result
};