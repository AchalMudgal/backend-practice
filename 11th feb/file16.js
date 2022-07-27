const readLine = require("readline");

const take = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
});

take.question("what is your name",function(answer){
    console.log("my name is",answer);
    take.close();// to stop the continuation of function
});