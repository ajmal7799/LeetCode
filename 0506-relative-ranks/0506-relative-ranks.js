/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let a = [...score]
 
let sort = a.sort((a,b)=> b-a)
console.log(sort)
let result = []
"Gold Medal"
"Silver Medal"
"Bronze Medal"


for(let i=0; i<score.length; i++) {
    if(score[i]==sort[0]) {
        result.push("Gold Medal")
    }else if(score[i]==sort[1]) {
        result.push("Silver Medal")
    }else if(score[i]==sort[2]) {
        result.push("Bronze Medal")
    }else if(score[i]==sort[3]) {
        result.push("4")
    }else if(score[i]==sort[4]) {
        result.push("5")
    }
    
}
return result
};