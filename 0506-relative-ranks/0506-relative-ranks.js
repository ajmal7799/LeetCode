/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sort = [...score].sort((a,b)=> b-a)
let rankMap = new Map()

for(let i=0; i<sort.length; i++) {
    if(i==0) rankMap.set(sort[i],"Gold Medal")
    else if(i==1) rankMap.set(sort[i],"Silver Medal")
    else if(i==2) rankMap.set(sort[i],"Bronze Medal")
    else rankMap.set(sort[i],String(i+1))
}
let result = []

for(let i=0; i<score.length; i++) {
    result.push(rankMap.get(score[i]))
}
return result

};