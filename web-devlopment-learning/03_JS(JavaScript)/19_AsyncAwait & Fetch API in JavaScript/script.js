// promise Example

// function getData(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// console.log("Loading Modules...")

// console.log("Do something else")

// console.log("Load data")
// let data = getData()

// data.then((v) => {
//     console.log(data)
    
//     console.log("Process data")

//     console.log("Task 2")
    
//   }
//   )

//async await example
// async function getData(){
//simulate getting data from server
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await x.json()
    let data = await x.json()
     return data
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // console.log(data)
    // return 455
}

async function main() {
    console.log("Loading Modules...")

console.log("Do something else")

console.log("Load data")
let data = await getData()

    console.log(data)
    
    console.log("Process data")

    console.log("Task 2")
}


//settle means resolve or reject
// resolve means promise has settled successfully
// reject  means promise has not settled successfully

main()