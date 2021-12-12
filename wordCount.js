var speech  = "I don't know what to say" ;
var count = 0;

for(var i = 0; i<speech.length; i++) {
    var word = speech[i];
    if (word == " ") {
        count++;
    }
}
console.log(count);
