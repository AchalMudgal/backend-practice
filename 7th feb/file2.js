let a = 24;
let b = 12;
let c = 8;
let m = 24;
let n = 8;
let o = 0.6;
let volumeOfWall = m*n*o;
volumeOfWall = volumeOfWall*Math.pow(100,3);
let volumeOfBrick = a*b*c;
let numberOfBrick = (0.85*volumeOfWall)/volumeOfBrick;
numberOfBrick = Math.ceil(numberOfBrick);
console.log(numberOfBrick);