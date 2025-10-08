/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1
    
    while(true) {
        let x = startValue
        let valid = true
        
        for(let num of nums) {
            if(num < 0) {
                x -= Math.abs(num)
            }else {
                x += num
            }
            if(x < 1) {
                valid = false
                break
            }
        }
        if(valid) {
            return startValue
        }else {
            startValue++
        }
    }
};