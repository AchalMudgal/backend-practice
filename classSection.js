function studentsSection(marks){
    if(marks >= 75){
        console.log(`With marks ${marks} you are transferd to section A`);
    }
    else if(marks >= 50 && marks < 75){
        console.log(`With marks ${marks} you are transferd to section B`)
    }
    else if(marks >= 33 && marks < 50){
        console.log(`With marks ${marks} you are transferd to section C`)
    }
    else{
        console.log(`With marks ${marks} you are transferd to section D`)
    }
}

studentsSection(99);
studentsSection(11);
studentsSection(45);
studentsSection(66);