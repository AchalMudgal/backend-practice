let students =["ram","shyam","ravi","guli"];
let stud1 = students[0];
let stud2 = students[2];
console.log(stud1);
console.log(stud2);


console.log("              ");//just to make space

// ANOTHER SIMPLER WAY

let [stm1,stm2,stm3,stm4] =["ram","shyam","ravi","guli"];
console.log(stm4);
console.log(stm2);


console.log("                   ");

// one more another way

let students1 =["ram","shyam","ravi","guli"];
let [ ,stu2, ,stu4] = students1;
console.log(stu2);
console.log(stu4);

//----------

console.log("   ");

let students2 =["ram","shyam","ravi"];
let [ ,sts2, ,sts4 = "NO STUDENT"] = students2;
console.log(sts2);
console.log(sts4);

//-----------
console.log("    ");

let students3 =["ram","shyam","ravi","guli"];
let [ ,stt2, ,stt4 = "NO STUDENT"] = students3;
console.log(stt2);
console.log(stt4);

//==========================
console.log("        ");

let students4 =["ram","shyam","ravi","guli"];
let [sttn1,sttn2,...reststudent] = students4;
console.log(sttn1);
console.log(sttn2);
console.log(reststudent);
