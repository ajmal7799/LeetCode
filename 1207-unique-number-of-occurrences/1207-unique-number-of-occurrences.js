/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
let occur = {}

for(let val of arr) {

    if(!occur[val]) {
        occur[val] = 1
    }else {
        occur[val]++
    }
}

let values = []
let flag = true
for(let key in occur) {
    if(!values.includes(occur[key])) {
        values.push(occur[key])
        falg = true
    }else{
        flag = false 
    }
}
return flag 
};