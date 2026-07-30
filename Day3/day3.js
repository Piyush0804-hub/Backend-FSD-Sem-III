//Promise for async
//JS single threaded
// const promiseOne=new Promise((resolve, reject)=>{
//     console.log("Promise Task 1");
//     resolve("Promises Passed by using resolve.");
//     let msg=true;
//     if(msg!=true){
//         console.log("Message using promises failed");
//     }
//     else{
//         console.log("ERROR......")
//     }
//     setTimeout(()=>{
//         console.log(resolve());
//     }, 3000)
// });
// promiseOne.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)

// })


//Async await
// console.log("1")
// async function test(){
//     console.log(2);
//     await console.log(3);
//     console.log(4);
// };
// test();
// console.log("5");


async function test1(){
    console.log("Message 1");