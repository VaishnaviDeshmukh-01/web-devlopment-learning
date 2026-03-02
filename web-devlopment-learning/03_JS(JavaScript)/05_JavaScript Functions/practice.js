// Basic Function
function sayHello(){
    console.log("Hello!");
}
sayHello();

//Function with input(Parameters)
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("John");

//Returning a value
function add(a, b){
    return a + b;
}
let result = add(10, 33);
console.log(result);

function saySomething(){
    console.log("I am learning JavaScript!");
}
saySomething();

function multiply(a, b){
    return a * b;
}
// console.log(multiply(3, 5));
let answer = multiply(2, 5);
console.log(answer);

function greeting(name){
    console.log("Good Morning, " + name);
}
greeting("Sara");

// function checkNumber(number){
//     if(number%2 === 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkNumber(2));

function checkNumber(number){
    return number % 2 === 0 ? "Even":"Odd";
}
console.log(checkNumber(7));

// function findNumber(num){
//     if(num > 0){
//         return "Positive";
//     }else if(num < 0){
//         return "Negative";
//     }else{
//         return "Zero";
//     }
// }
// let ans = findNumber(-9);
// console.log(ans);

function findNumber(num){
    if(num === 0) return "Zero";
    return num > 0 ? "Positive":"Negative";
}
console.log(findNumber(1));

let a = 4;
let b = 8;

// function largeNumber(a, b){
//     if(a > b){
//         return a;
//     }else if(b > a){
//         return b;
//     }
//     else{
//         return "Both Numbers are Same!"
//     }
// }
// console.log(largeNumber(8, 8));

function largeNumber(a, b){
    return a >= b ? a:b;
}
console.log(largeNumber(8, 8));
