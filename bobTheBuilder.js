/*
Bob has recently started his career as a builder. But he is always confused about the number of 
bricks that will be needed at the site. To be on safer side he always orders more than the required 
number of bricks. This inturn helps him in saving the transportation cost of bricks but adds an 
unnecessary burden on the pockets of the client. Due to which most of the clients never call Bob 
back for any new project.
Bob needs your help in deciding how many bricks are needed for constructing a wall of length L 
meter, height H meter and thickness T meter if 15% of the wall is filled with mortar and the 
dimension of 1 brick is 24x12x8 cm.
*/

function bobTheBuilder(l,h,t){

    let wallThickness = (l*h*t);
    let mortarPercentage = 15;

    

    let numberOfBricks = Math.ceil((wallThickness*1000000*((100 - mortarPercentage)/100))/(24*12*8));

    console.log(numberOfBricks);
}

bobTheBuilder(24,8,0.6);