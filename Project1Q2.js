//convertToSeconds(1, 3) ➞ 3780
//convertToSeconds(2, 0) ➞ 7200
//convertToSeconds(0, 0) ➞ 0
let hour= 1;
let minutes= 4;

 function convertToSeconds(H, M){
     
 timeInSecond = (60*60*H) +(M*60) ;
 console.log(timeInSecond);
 }
console.log(convertToSeconds(hour,minutes));


