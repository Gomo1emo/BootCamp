const gpa = 50;
var pass_mark = 70;
//const exp = 70;
//const dist = 85;
//const avg = 60;
//const fail = 49;
//const dnw = 0;

if(pass_mark >= gpa && pass_mark <= 69) {
    console.log("You passed")
}else if(pass_mark <= 49) {
    console.log("Try again next semester")
} else if(pass_mark >= 69 && pass_mark < 84 ) {
    console.log("You have passed with Examption!!")
} else if(pass_mark >= 85 && pass_mark <= 100 ) {
    console.log("You have passed with Distinction!!")
} 