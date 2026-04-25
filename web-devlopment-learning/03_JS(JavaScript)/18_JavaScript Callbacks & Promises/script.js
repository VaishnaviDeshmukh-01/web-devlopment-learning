function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);

console.log("Bunny is a hacker")
console.log("Bunny is a hecker")

setTimeout(() => {
    console.log("I am Inside Timeout")
}, 0);

setTimeout(() => {
    console.log("I am Inside Timeout 2")
}, 0);

console.log("The End")

const fn = () => {
  console.log("Nothing")
}


const callback = (arg, fn) => {
    console.log(arg)
    fn()
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Sara", fn)
    document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)