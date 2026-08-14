/*Event Loop:
Create one log synchronoustask
create a function main and call two setTimeout functions that print something and also create two Promise objects
use 2 callback functions outside main function */


console.log("Synchronous Task");
const f1=()=>{
    console.log("F1");
}
const f2=()=>{
    console.log("F2");
}

const f3= main=()=>{
    console.log("Main Function");
    setTimeout(f1, 1000);
    setTimeout(f3, 2000);
    new Promise((resolve, reject)=>{
        resolve("Promise 1");
    }).then((result)=>{
        console.log(result);
    })
    new Promise((resolve, reject)=>{
        resolve("Promise 2");
    }).then((res)=>{
        console.log(res);
    })  
}

f3();
