function factorial(n) {

    // using for loop
    let resultFor = 1;
    for (let i = 1; i <= n; i++) {
        resultFor *= i;
    }

    // using reduce
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    let resultReduce = arr.reduce((acc, num) => acc * num, 1);

    console.log("Factorial using for loop:", resultFor);
    console.log("Factorial using reduce:", resultReduce);
}

factorial(5);