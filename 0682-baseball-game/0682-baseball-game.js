/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let result = []

for(let i=0; i<operations.length; i++) {
    if(operations[i] == "C") {

        result.pop()
    }else if(operations[i] == "D") {

        let a = result.pop()
        result.push(a,a+a)
    }else if(operations[i] == "+") {
        let a1 = result[result.length-1]
        let a2 = result[result.length-2]
        result.push(a1+a2)
        
    }else {
        result.push(Number(operations[i]))
    }
}
let sum = result.reduce((acc,curr)=> acc+curr, 0)
return sum
};