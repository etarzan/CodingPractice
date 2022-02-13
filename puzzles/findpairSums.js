

/*
*Find pairs in an array whose sum equals a value
*/
function findSumPairs(candidates, sum){
    let output = [];
    for(const item of candidates){
        let complement = sum - item;
        let tmp=[];
        if(candidates.indexOf(complement)>-1){
            tmp.push(item);
            tmp.push(complement);
            output.push(tmp);
            candidates.splice(candidates.indexOf(complement),1);
        }
    }
    return output;
}


let candidates = [4, 6, 7,2, 3, 10, 8, 11];
let sum = 10

console.log(findSumPairs(candidates,sum));
