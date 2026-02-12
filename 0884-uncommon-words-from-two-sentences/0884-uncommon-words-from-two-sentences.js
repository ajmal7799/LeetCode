/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let a = s1.split(" ")
let b = s2.split(" ")

let map = new Map()
let result = []

for(let val of a) {
    if(map.has(val)) {
        map.set(val,map.get(val) + 1)
    }else {
        map.set(val,1)
    }

}

for(let val of b) {
    if(map.has(val)) {
        map.set(val,map.get(val) + 1)
    }else {
        map.set(val,1)
    }

}


for(let [key,value] of map) {
    if(value == 1) {
        result.push(key)
    }
}
return result
};