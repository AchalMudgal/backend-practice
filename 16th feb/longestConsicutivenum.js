function longestConsicutiveSequence(arr){
    let mySet = new Set();

    let longestConsicutiveSequenceLength = 0;

    for(let i=0; i< arr.length; i++){
        mySet.add(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        let currNum =arr[i];
        let smallerThanCurrentNum = mySet.has(currNum-1);

        if(!smallerThanCurrentNum){
            let j = currNum;
            while(mySet.has(j)){
                j++;
            }
            let lengthOfTheSequence = j - currNum;
            longestConsicutiveSequenceLength = lengthOfTheSequence > longestConsicutiveSequenceLength ?lengthOfTheSequence:longestConsicutiveSequenceLength;

        }
    }
    return longestConsicutiveSequenceLength;
}

let arr =[4,8,9,1,11,7,6,12,13,2,14,15];
console.log("longest consicutive num",longestConsicutiveSequence(arr));