var business = 450;
var minister = 350;
var doctor = 550;

var max = Math.max(business, doctor, minister);
console.log(max);


// if else way...................

if (business > minister) {
    if (business > doctor) {
        console.log("Business is Bigger")
    }
    else{
        console.log("Doctor is Bigger");
    }
}
else{
    if (minister > doctor) {
        console.log("minister is bigger")
    }
    else{
        console.log("doctor is Bigger")
    }
    
}