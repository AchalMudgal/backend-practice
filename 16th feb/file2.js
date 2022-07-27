 function findFrequency(str, givenCharachter){
     let freq = 0;
     for(idx in str){
         let curchat = str.charAt(idx);
         if(curchat === givenCharachter){
            console.log(curchat,"is equal to",givenCharachter);
            freq++;
         }
     }
     return freq;
 }
 let str ="Relevel";
 let frequency = findFrequency(str ,"e");
 console.log(frequency);
