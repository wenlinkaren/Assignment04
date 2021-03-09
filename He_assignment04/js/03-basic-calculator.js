// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let number1, number2, operation;
do {
    number1 = Number(prompt("Please enter the first number."));
    number2 = Number(prompt("Please enter the second number."));
    operation = prompt("Please enter one arithmetic opration you want to perform. (add, subtract, multiply or divide)");
} while (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide");

// CHECK TO SEE WHAT OPERATION THEY'RE USING, CALL THE APPROPRIATE FUNCTION
switch (operation) {
    case "add" :
        console.log(calc.add(number1, number2));
        alert(`The result is ${calc.add(number1, number2)}.`);
        break;
    case "subtract" :
        console.log(calc.subtract(number1, number2));
        alert(`The result is ${calc.subtract(number1, number2)}.`);
        break;  
    case "multiply" :
        console.log(calc.multiply(number1, number2));
        alert(`The result is ${calc.multiply(number1, number2)}.`);
        break;
    case "divide" :
        console.log(calc.divide(number1, number2));
        alert(`The result is ${calc.divide(number1, number2)}.`);
        break;   
    default :
}