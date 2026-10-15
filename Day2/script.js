//1 Find the Maximum number of Three Number:
const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));
const num3 = parseInt(prompt("Enter the third number:"));

if(num1 >= num2 && num1 >= num3){
    console.log(num1 + " is the maximum number.");
}
else if(num2 >= num1 && num2 >= num3){
    console.log(num2 + " is the maximum number.");
}