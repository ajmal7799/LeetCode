/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj = {}
for(let num of s) {
    obj[num] = (obj[num] ||0) +1
}
let val = Object.values(obj)

let a = val[0]
let b = val[1]
if(a==b) {
    return true
}else {
    return false
}
};