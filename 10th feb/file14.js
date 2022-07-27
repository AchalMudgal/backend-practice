let avenger ={realName : "tony stark", city :"new york", heroName : "iron man"};
console.log(avenger);
console.log(avenger.realName, avenger.city,avenger.heroName);

let{realName:bhaiKaNaam, city:jagaah, heroName:ourjeero} = avenger;
console.log(bhaiKaNaam,jagaah,ourjeero);

let{city,...resOfIt} = avenger;
console.log(city);
console.log(resOfIt);