console.log("This is Strings Page");

let a ="Rishi";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);

let name = "Rishi";
let friend = "Savya";
console.log("His name is " + name + " and his friends name is " + friend);
console.log(`His name is ${name} and his friends name is ${friend}`);

//Lowercase and Uppercase in strings
let b = "Shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

//length of strings
console.log(b.length);

//Slice in strings
console.log(b.slice(1, 4));
console.log(b.slice(0, 6));
console.log(b.slice(3));

//Replaceing values
console.log(b.replace("Sh", "77"));
console.log(b.replace("Shivam", "Sara"));


//Contatination
console.log(b.concat(a));
console.log(b.concat(a, "Ashi"));
console.log(b.concat(a, "Ashi", "Sara", "Samar"));


//trim removes whitespaces
let c = "     Sara   "
console.log(c.trim());

//Show the character
console.log(b.charAt(0));
console.log(b.charAt(2));
console.log(b.charAt(5));

//indexof
console.log(b.indexOf("m"));

//Statrswith
console.log(b.startsWith("hi"))
console.log(b.startsWith("Sh"))

//Endswith
console.log(b.endsWith("a"));
console.log(b.endsWith("am"));

//includes
console.log(b.includes("Sh"));

console.log(b.split(" "));

let quote = "He said \"Hello\"";
let newline = "Line1\nLine2";
console.log(quote);
console.log(newline);

b = "Y" + b.slice(1);
console.log(b);

console.log(Number("123"));
console.log(parseFloat("12.3"));
console.log(parseInt("123"));