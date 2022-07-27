/*1. Write a function named astroGuru that:
takes 4 arguments: number of children, spouse’s name, location, job.
outputs a string to the console that is of the form: "You will be a `job` in `location` and married to `spouse` with `no of children` kids
*/

function astroGuru(childNum,spouseName,location,job){
    let future = (`You will be in a ${job} in ${location} and married to ${spouseName} with ${childNum} kids`);
    console.log(future);
}

astroGuru(2,"Chandni","Banglore","Web Deveploper");