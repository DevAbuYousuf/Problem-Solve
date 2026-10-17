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
else{
    console.log(num3 + " is the maximum number.");
}
//Different Solution:
 function maxofThree(a,b,c){
   let max;

   if(a>=b && a>=c){
       max={a};
   }
   else if(b>=a && b>=c){
       max= {b}
   }
   else{
         max={c};
   }
   return max;
 }
 console.log(maxofThree(2,20,3));

 //Check if a Number is Positive, Negative or zero:
 function checkNumber(num){
    if(num > 0){
        console.log(num + " is a positive number.");
    }
    else if(num < 0){
        console.log(num + " is a negative number.");
    }
    else{
        console.log(num + " is zero.");
    }
 }
 checkNumber(5);
 checkNumber(-3);
 checkNumber(0);
 
 //3 calculate Electriciy Bill:
  function calculateElectricityBill(units) {
    let billAmount;

    if (units <= 100) {
        billAmount = units * 5;
        }
    else if (units <= 200)   {
        billAmount = 100 * 5 + (units - 100) * 10;
    }
    else if (units <= 300) {
        billAmount = 100 * 5 + 100 * 10 + (units - 200) * 15;
    }
    else {
        billAmount = 100 * 5 + 100 * 10 + 100 * 15 + (units - 300) * 20;
    }
    return billAmount;
  }

  console.log("Electricity Bill for 50 units: " + calculateElectricityBill(50));
  console.log("Electricity Bill for 150 units: " + calculateElectricityBill(150));
  console.log("Electricity Bill for 250 units: " + calculateElectricityBill(250));
  console.log("Electricity Bill for 350 units: " + calculateElectricityBill(350));
