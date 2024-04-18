//Lets create a program that calculates positive numbers only
//If a user enters a negative number that number is skipped

let prompt = require('prompt-sync')();
//negative numbers --> loop must terminate
//non-numeric charecters --> skip iteration

let sum = 0;
let num = 0;
while(num >= 0) {
    //accept input from user
    num = parseInt(prompt('Enter a number: '));
    
    sum += num;

    
    

    //continue condition NaN = Not a Number
    if(isNaN(num)) {
        console.log("You entered a string that is not a number");
        num = 0;
        continue;
    }
    console.log(`The sum is: ${sum}`);
}
//display results