function nice(name) {
    console.log("This is a website for" + name + "function")
    console.log("This is also an website for" + name + "function")
    console.log("This is a website for my own " + name + "function")
    console.log("This is a website for" + name + "function")
}

nice("HTML");

nice("JAVA");

function sum(a, b) {
    // console.log(a + b);
    return a + b; 
}


sum(553, 111);
sum(233, 383);

result = sum(23, 33);
console.log("Sum of this number is : ", result);


const func1 = (x)=>{
    console.log("This is an arrow function", x)
}

func1(23);
func1(4);
func1(230);