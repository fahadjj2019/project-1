json = (require('./data')); 
let data = JSON.parse(json);
data= data.people 
//--------------LogData function -------------------------

let logData = function() {
    console.log(data)
  
}


//--------------LogName function -------------------------
let logName = function (){
for (let key in data )
{
        console.log(data[key].name+ "\n")
        // console.log("\b");

}
}

//--------------logNameEyes function ---------------------
let logNameEyes = function() {
    for (let key in data )
    {
            console.log(data[key].name + "eyes colors are"+data[key].eye_color+ "\n" )
            // console.log(data[key].eye_color+ "\n")
            // console.log("\b");
    }
};

//--------------logByMass function ---------------------

let logByMass = function() {
    for (let key in data )
    {
        if (data[key].mass >= 75)
            console.log(data[key].name + " mass is greater than 75" + "\n")
            // console.log("\b");
    }
};




logData(data);
// logName(data);
// logNameEyes(data);
// logByMass(data);
