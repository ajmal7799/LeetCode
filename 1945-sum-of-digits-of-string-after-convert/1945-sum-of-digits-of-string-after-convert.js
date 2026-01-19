/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = ""
for(let i=0; i<s.length; i++) {
    str += (s.charCodeAt(i)-96).toString()
}

let num = str.split("")

let a = num.map((x)=> Number(x))

let sum = 0
let count = 0
for(let i=0; i<1; i++) {
    sum += a.reduce((acc,curr)=> acc+curr, 0)
    count++
}


if(count==k) {
    return sum
}
let x= 0
for(let i=0; i<k-1; i++) {
    let b = sum.toString().split("")
    let d = b.map((x)=> Number(x))
    x = d.reduce((acc,curr)=> acc+curr, 0)
    count++
    b=""
    d=0
    sum = x
    if(count==k){
        break
    }
    
}

return x
};