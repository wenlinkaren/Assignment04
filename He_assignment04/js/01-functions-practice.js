//STEP 1
function halfNumber(num) {
   let halfNumber = num / 2;
   return halfNumber;
}
window.console.log(`Half of 5 is ${halfNumber(5)}.`);

//STEP 2
function squareNumber(num) {
    let squareNumber = num * num;
    return squareNumber;
}
window.console.log(`The result of squaring the number 3 is ${squareNumber(3)}.`);

//STEP 3
function percentOf(num1, num2) {
    let percentOf = num1 / num2 * 100;
    return percentOf;
}
window.console.log(`2 is ${percentOf(2, 4)}% of 4.`);

//STEP 4
function findModulus(num1, num2) {
    let findModulus = num2 % num1;
    return findModulus;
}
window.console.log(`${findModulus(4, 10)} is the modulus of 4 and 10.`);

//STEP 5
let num1 = Number(prompt("Enter the first number for sum."));
let num2 = Number(prompt("Enter the second number for sum."));
let num3 = Number(prompt("Enter the third number for sum."));
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
      total += Number(arguments[i]);
  }
  return total;
}
window.console.log(sum(num1, num2, num3));