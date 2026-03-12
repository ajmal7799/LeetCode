/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let num1 = []
let num2 = []

let result = []

for(let i=0; i<nums1.length; i++) {
    if(!nums2.includes(nums1[i]) && !num1.includes(nums1[i])) {
        num1.push(nums1[i])
    }
}
for(let i=0; i<nums2.length; i++) {
    if(!nums1.includes(nums2[i]) && !num2.includes(nums2[i])) {
        num2.push(nums2[i])
    }
}

result.push(num1,num2)
return result
};