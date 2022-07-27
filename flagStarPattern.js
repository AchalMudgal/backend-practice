/*

Create a pattern using ‘*’ as shown below using loops.
*
**
***
****
*****

*/

function starPattern(num){

    let reqString = "";
    for(let row = 0; row < num; row++){
        for(let coloumn = 0; coloumn <= row; coloumn++){
            reqString += "*";
        }
        reqString += "\n"
    }
    return reqString;
}

let result = starPattern(5);
console.log(result);