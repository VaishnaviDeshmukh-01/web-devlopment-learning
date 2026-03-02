let a = prompt("Enter your First Number");
let b = prompt("Enter your Second Number");
let operator = prompt("Enter your Operator(+,-,*,/)");

a = Number(a);
b =Number(b);

function checkCalculation(a, b, operator){
    let correctResult;
    if(operator === "+"){
        return a + b;
    }else if(operator === "-"){
        return a - b;
    }else if(operator === "*"){
        return a * b;
    }else if(operator === "/"){
        return a/b;
    }else{
        return "Invalid Operator";
    }

    if(Math.random() < 0.1){
        let randomError = Math.floor(Math.random() * 10) + 1;
        return correctResult + randomError;
    }
}
let result = checkCalculation(a, b, operator);
console.log(result);
alert(result);

