//1- print Number from 1 to N
const num =parseInt(prompt("Enter a number:"));

for(let i =0 ; i< num; i++){
    console.log(i);
}

//2 Print Numbers from N to 1 without changing teh loop condition of 

const num1 =parseInt(prompt("Enter a number:"));

for(let i =0 ; i< num1; i++){
    console.log(num1 -i);
}

//3 print all Even Number from 1 to N
const num2= parseInt(prompt("Enter a number:"));

for(let i =1; i<=num2; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//4 Sum of First Natural Numbers
console.time()
const num4 =5;
 let sum=0;
for(let i =1; i<=num4; i++){
    sum += i;
}
console.log(sum);
console.timeEnd()

//5 product (Factorial) of N:
console.time()
const num5 = parseInt (prompt("Enter a number:"));
 let fact=1;
 for (let i=1;i<=num5; i++){
    fact *= i;
 }
console.log(fact);
console.timeEnd()
//6  sum of All Even number up to N;
console.time()
const num6 = parseInt (prompt("Enter a number:"));
 let sum1=0n;
 for (let i=1n;i<=num6; i++){
    if(i % 2n ===0n){
        sum1 += i;
    }
 }
console.log(sum);
console.timeEnd()

//7 
const num7 = parseInt (prompt("Enter a number:"));

 for (let i=1;i<=num7; i++){

    console.log(i * i);
//    console.log( Math.pow(i,2));
 }