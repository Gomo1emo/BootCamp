const gpa = 50;
var pass_mark = 90;
const exp = 70;
const dist = 85;
const avg = 60;
const fail = 49;
const dnw = 0;

if(pass_mark >= gpa && pass_mark <= 69) {
    console.log("You passed")
}else if(pass_mark <= gpa) {
    console.log("Try again next semester")
} else if(pass_mark >= exp && pass_mark < dist ) {
    console.log("You have passed with Examption!!")
} else if(pass_mark >= dist && pass_mark <= 100 ) {
    console.log("You have passed with Distinction!!")
} 