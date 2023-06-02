// setTime (1초 뒤에 some data가 출력)

// function getData(callbackfunc) {
//   let fakeData;
//   setTimeout(function () {
//     fakeData = "some data";
//     callbackfunc(fakeData);
//   }, 1000);
// }

// function printData(data) {
//   console.log(data);
// }

// getData(printData);


// setInterval (1초마다 hello를 출력)

// setInterval(() => console.log('hello'), 1000)


//clearInterval (반복(setTimeout)을 멈춘다)

// let count = 0;

// const intervalId = setInterval(() => {
// console.log(count);
// count++;
// if(count>5){
//     clearInterval(intervalId);
// }
// }, 1000)


//문제

// function hello(name){
    
//     return (time) =>{
//         const id = setInterval(()=> console.log(`Hello, ${name}`), time)
//         return () =>{
//             clearInterval(id)
//         }
//     }
// }

// const helloAlice = hello("Alice")
// const stopHello = helloAlice(1000)
// setTimeout(stopHello,5500)


//promise ()

//예제_1


// function getData() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             const fakeData = 'some data';
//             resolve(fakeData);
//                 console.log("Not returned")
//         }, 1000);
//     });
// }

// getData()
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(error){
//         console.error(error);
//     })


//예제_2

// function getData() {
//     return new Promise(r => {
//         setTimeout(() => r({name: 'Alice'}), 1000)
//     })
// }

// getData().then((data) => data.name).then(console.log)


//예제_3

// function getData() {
//     return new Promise(r => {
//         setTimeout(() => ({name: 'Alice'}),1000)
//     })
// }

// function prcessData(data) {
//     return new Promise(r => {
//         setTimeout(() => r(data.name),1000)
//     })
// }

// getData().then(prcessData).then(console.log)


//문제

// function timeoutpromise(ms) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(resolve,ms)
//     })
// }

// timeoutpromise(1000),then(() => console.log("Hello after is"))


// async/await

// function getData() {
//     return new Promise(r => {
//         setTimeout(() => r({neme: 'Alice'}),1000);
//     })
// }

// function prcessData(data) {
//     return new Promise(r => {
//         setTimeout(() => r(data.neme), 1000);
//     })
// }

// async function main() {
//     const data = await getData();
//     const proc = await prcessData(data);
//     console.log(proc);
//     return 'Success!';
// }

// main().then((result) => console.log(result));