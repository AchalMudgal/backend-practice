function placeCows(cows, stalls, noOfStalls, mid){
    let indexOfStallOfLastCowPlaced = 0;//index of the firstly placed cow 
    cows--;// as first cow is placed 

    for(let stallIdx = 1; stallIdx < noOfStalls; stallIdx++){
        if(stalls[stallIdx] - stalls[indexOfStallOfLastCowPlaced] >= mid){
             cows--;
            indexOfStallOfLastCowPlaced = stallIdx;
            if(cows == 0) return true;
        }
    }
    return false;        
}




function minDistanceBetweenCows(numStalls,stalls,cows){

    let minDistance = 0;
    let maxDistance = stalls[numStalls - 1];

    let largestMiniDistance = -1;

    while(minDistance <= maxDistance){
        let mid = Math.floor((minDistance + maxDistance)/2);
        let ableToPlaceCows = placeCows(cows, stalls, numStalls, mid);
        if(ableToPlaceCows == true){
            if(mid > largestMiniDistance){
                largestMiniDistance = mid;
            }
            minDistance = mid + 1;//search on right for better place
        }
        else{
            maxDistance = mid - 1;// search on left

        }
    }
    return largestMiniDistance;
}


let noOfStalls = 5;
let cows = 2;
let stalls = [1,2,4,8,9];

let minimumDistance = minDistanceBetweenCows(noOfStalls, stalls, cows);
console.log(minimumDistance);