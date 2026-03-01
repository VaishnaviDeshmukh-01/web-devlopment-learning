console.log("conditional statements");

let age = 1;
// let grace = 2;


// age += grace;
// console.log( age + grace);
// console.log( age - grace);
// console.log( age * grace);
// console.log( age / grace);
// console.log( age ** grace);
// console.log( age % grace);

// if (age != 18) {
//     console.log("You can drive");
// } else {
//     console.log("You cannot drive")
// }

if (age === 18) {
    console.log("You can drive");
}
else if(age == 0){
    console.log("Are you Kidding?")
} else if(age == 1){
    console.log("Are you again Kidding?")
} else {
    console.log("You cannot drive")
}

//trenary operators

{
    let a=2;
    let b=9;

    c= a<b ?(a-b):(b-a);
    console.log(c);
}
