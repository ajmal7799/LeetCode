/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine ) {
 let obj1 = {}
    for(let str of ransomNote) {
        if(!obj1[str]) {
            obj1[str] = 1
        }else{
            obj1[str]++
        }
    }
    
     let obj2 = {}
    for(let str1 of magazine) {
        if(!obj2[str1]) {
            obj2[str1] = 1
        }else{
            obj2[str1]++
        }
    }
    let flag = false
    for(let val in obj1) {
        if(obj2.hasOwnProperty(val)) {
            if(obj1[val] <= obj2[val]) {
                flag = true
            }else {
                flag = false
            }
        }else{
            flag = false
        }
    }
return flag
        
};