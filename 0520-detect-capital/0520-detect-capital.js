/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(str) {
    if(str.toLowerCase() == str || str.toUpperCase() == str) {
       return true
   }else if((str[0] + str.slice(1).toUpperCase()) == str) {
       return true
   }else {
       return false
   }
};