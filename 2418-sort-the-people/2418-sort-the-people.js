/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  
    let result = []

for(let i=0; i<names.length; i++) {
    result.push({name:names[i], height: heights[i]})
}



result.sort((a,b)=> b.height-a.height)

let ans = []
for(let i=0; i<result.length; i++) {
    ans.push(result[i].name)
}
    return ans
};