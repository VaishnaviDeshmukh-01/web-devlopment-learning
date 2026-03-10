//Array
let arr = [100, 602, 38, 224, 500];
const fruits = [1, "Apple", 2, "Banana"] //can be different data types

//changing array elements
arr[0] = 5666;

//type of array
console.log(arr, typeof arr);

//Array length
console.log(arr.length);

//Printing array elements
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//Array Methods

//Converting array to string
console.log(arr.toString());

//joins all the array elements
console.log(arr.join(" and "));

//removes last element from the array
arr.pop();
console.log(arr);
console.log(arr.pop());

//Adds new element at the end of the array
arr.push(230);
console.log(arr);
console.log(arr.push(100));
console.log(arr.push("Isha"));

//removes first element and returns
arr.shift(); 
console.log(arr);
console.log(arr.shift());

//adds element in the begining and returns new array length
arr.unshift("Jack");
console.log(arr);
console.log(arr.unshift());

//array elements can be deleted using delete operator
delete arr[1];
console.log(arr);
console.log(delete arr[1]);

//used to join arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 8];
let result = arr1.concat(arr2, arr3);
console.log(result);

//sort() is used to sort an array alphabetically
arr.sort();
console.log(arr);
console.log(arr.sort());

//splice can be used to add new items in an array
arr.splice(1,3);
console.log(arr);
arr.splice(1, 1, 44, 550, 8);
console.log(arr);

//slice out a piece from an array it creates an new array
const num = [1, 2, 3 , 4];
// num.slice(2);
// console.log(num.slice(2));
console.log(num.slice(1,4));

//reverse the element in the soure array
arr.reverse();
console.log(arr);
console.log(arr.reverse());

//for each calls a function once for each array element
arr.forEach((Value, index, array)  => {
    console.log(Value, index, array)
});


//for..in loop can be used to get the keys from an array
let obj ={
    a: 1,
    b: 2,
    c: 3,
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key, element);
    
    
}

//for...of loop can be used to get the values from an array
for (const iterator of arr) {
    console.log(iterator);
}

//map() creates a new array by performing some operations on each array element
let numbers = [1, 54, 28, 10, 13];
// let newNumbers = [];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     newNumbers.push(element**2)
// }
// console.log(newNumbers);
let newNumbers = numbers.map((element)=> {
    return element**2
})
console.log(newNumbers);

//filter() - filters an array with values that passes a test and creates a new array
const greterThanTwoHundred = (e) =>{
    if(e>200){
        return true
    }
    return false
}
console.log(newNumbers.filter(greterThanTwoHundred));

//reduce() - reduce an array to a single value
let a = [1, 5, 10, 15, 20];

const red = (a, b) =>{
    return a*b
}
console.log(a.reduce(red));

//used to create an array from any othher object
const ab = Array.from("hello");
console.log(ab);