// function star(n){
//     if(n === 0) return;

//     star(n-1)

//     let s = ' '
//     for(let i = 1; i <= n; i++) s+= '*'
//         console.log(s)
//     }

// star(4)

// function sayHello(name){
//     console.log("Hello, " + name + "!")
// }

// function callFuction(func, arg){
//     func(arg);
// }

// callFuction(sayHello, "AlICE")

// function wrapFunction(func) {
//     return () => {
//       console.log("Before function call");
//       func();
//       console.log("After function call");
//     };
//   }
  
//   const originalFunction = function () {
//     console.log("This is the original function.");
//   };
  
//   const wrappedFunction = wrapFunction(originalFunction);
//   wrappedFunction();

// function hello(name){
//     return()=>{
//         console.log("Hello, " + name)
//     }
// }
// const helloAlice = hello("Alice")
// helloAlice()
// helloAlice()

// function createCounter()  {
//     let count = 0
//     return () => {
//         count += 1
//         console.log(count)
//     }
// }

// const counter = createCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())

function list(){
    let sum = []
    return {
        add: (name) => sum.push(name),
        print: () => {
            for(let name of sum){
                console.log(name)
            }
        },
    }
}

const user = list()
user.add("Alice")
user.add("Bob")
user.print()
user.add("Carol")
user.print()
