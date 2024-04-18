//let age;
let prompt = require('prompt-sync')();
//Lets write a program that will check if the user is old enough tho access the site

function checkAge(age) {
    if(age>=18){
        return true;
    }else {
        console.log("Do you have permission from your parents?");
    }

}
let age = prompt("How old are you?", 18)
    if(checkAge(age)) {
        console.log("Access is granted");
    }else {
        console.log("Access is denied!!");
    }

    function showMovie () {
        let d= 1495;
        let i = 0;
        for(i=1500; i>d; i--) {
            console.log("Access is granted");
            console.log("Playing a movie", i);
        }
    }
    showMovie();