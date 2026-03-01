console.log("JavaScript Loops");

let a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a + i);
    
}

let obj = {
    name: "Savi",
    role: "Designer",
    company: "CoderAI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element)
}


for (const c of "SAVI") {
    console.log(c)
}


a = 1;
while (a < 10) {
    console.log(a);
    a++;
}


b = 10;
do {
    console.log(b);
    b++;
} while (b < 100);