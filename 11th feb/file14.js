// JAVASCRIPT CODE TO CREATE A LOGIN MECHANISM USING OBJECTS
const user ={
    name : "Chandni",
    emailAddress :"chandnimudgal23feb@gmail.com",
    password : "chanchalMyLove",
    login : function(useremail,userpassword){
        if(this.emailAddress == useremail && this.password == userpassword){
            console.log("Chandni you have sucessfully logged in your gmail");
        }else{
            console.log("Username 0r Password incorrect");
        }
    }
}

user.login("chandnimudgal23feb@gmail.com","chanchalMyLove");
user.login("chandni23feb@gmail.com","achalMyLove");