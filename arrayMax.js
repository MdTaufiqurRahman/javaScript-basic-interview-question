var marks = [45, 81, 67, 98, 56, 35, 23]
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    const element = marks[i];
    if(element > max){
        max = element;
    }
    
}
console.log("Highest value is ", max);