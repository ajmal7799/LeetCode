/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    

// balloon
let needed = {b:1,a:1,l:2,o:2,n:1}
let obj = {}
for(let val of text) {
    obj[val] = (obj[val] || 0) + 1
}
// nlaebolko
let minCount = Infinity
for(let char in needed) {
    minCount = Math.min(minCount,Math.floor((obj[char] || 0)/needed[char]))
    // console.log(obj[char])
}

return minCount






};