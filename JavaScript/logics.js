var greetings = "welcome";
let times = 5;

//Block Scope
if(times>5 || times == 5) {
   greetings = "Hi there instead" // variable 2
} else {
    console.log(greetings);
}
//End of Block Scope

var hello = "Hello FS cohort"
if(times == 5 || times > 5) {
    hello = "welcome JavaScript"

console.log(greetings + " : " + hello);
}else {
    console.log(greetings + "  " + "Value is True");
}
if(times !=5) {
    console.log(greetings + " : " + Guesswork);
}else{
    console.log("I knew it!!!");
}
