
//Random number between 0 to 9
let num = Math.floor(Math.random() * 10);
console.log(num);

//Random number between 1 to 10
let num1 = Math.floor(Math.random() * 10 + 1); 
console.log(num1);

//Example dice
function rollDice(){
    return Math.floor(Math.random()*6) + 1;
}
console.log(rollDice());