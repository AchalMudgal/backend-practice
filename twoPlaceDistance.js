/*
A man reaches his office `y` min late when he travels at x km/hr. 
If he travels at x+2 km/hr then he reaches the office `y-10` min early.
Find the distance between his home and office
given the value of x = 4 and y = 20.
*/

function twoPlaceDistance(x,y){

    //normall time takes to reach office
    let time = (y*(x+1) - 5*(x+2));
    
    let distance = (x*(time+y))/60;

    console.log(distance);
}

twoPlaceDistance(4,20);