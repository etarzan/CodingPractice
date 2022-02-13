/**
 * find if in an array of words which can be sub words of a given long word
*   EG: [‘able’, ‘apple’, ‘excel’, ‘ell’] exist in “aabbleapppplllexcle”.. 
*   here able, apple and ell can all be formed except excel as that sequence of letters doesn’t exist 
 */


function isASubWord(words, str){
   let output = [];
   
    //MxNxK approach where m is length of words array, N is length of a word and n is the length of the string

    for(const item of words){
        if(isWord(item,str)){
            output.push(item);
        }
    }
    return output;
}

function isWord(word, str){
    for(const letter of word){
        let start  = str.indexOf(letter);
        let end = str.length;
        if(start >=0 && start < end){
            str = str.substring(start, end);
        } else{
            return false;
        } 
    }
    return true;
}

let str = '“aabbleapppplllexcle”';
let words = ['able', 'apple', 'excel', 'ell'];
//let output=[];

console.log(isASubWord(words,str));