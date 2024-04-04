//Simple calculator using JS and Switchcase

//We need this library module to accept user input
const prompt = require('prompt-sync')();

let results;
//Accept the user input
const operator =  prompt('enter operator (either +,-,*, or /):')

//accept an operand input
const num1 = parseFloat(prompt('Enter the first number'));
const num2 = parseFloat(prompt('Enter the second number'));

switch(operator) {
    //Formular for addition
    case'+':
    results = num1 + num2;
    console.log(`${num1} + ${num2} = ${results}`);
    break;
    
    case'-':
    results = num1 - num2;
    console.log(`${num1} - ${num2} = ${results}`);
    break;
    
    case'*':
    results = num1 * num2;
    console.log(`${num1} * ${num2} = ${results}`);
    break;
    
    case'/':
    results = num1 / num2;
    console.log(`${num1} / ${num2} = ${results}`);
    break;
}