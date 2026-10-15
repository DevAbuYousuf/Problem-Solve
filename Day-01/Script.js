//print the all numbers divisible by 3 and 5 up to N:

// const num =parseInt(prompt("Enter a number:"));

// for(let i =1; i<= num; i++){
//     if(i % 3 === 0 && i% 5 ===0){
//         console.log(i);
//     }
// }

// Find the sum of all odd numbers up to N:
// const num1 =parseInt(prompt("Enter a number:"));
// let sum=0;
// for(let i =1; i<=num1; i++){
//     if(i % 2 !==0){
//         console.log(i);
//         sum += i;
//     }
// }
// console.log(sum);

// print only the numbers that are both even and perfect squares up to N:

const num2 =parseInt(prompt("Enter a number:"));

for(let i=1;i<=num2;i++){
    if(i % 2 ===0 && Math.sqrt(i) % 1 ===0){
        console.log(i);
    }
}