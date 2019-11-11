
Year = 2000;
function isLeap(year){

    if (year%400 ===0){
    console.log(true);}
    else

if (year%4 === 0 & year%100!== 0 ){
    console.log(true);}


else{
    console.log(false);}

}



console.log(isLeap(Year));
