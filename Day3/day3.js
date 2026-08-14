//Promise for async
//JS single threaded
// const promiseOne=new Promise((resolve, reject)=>{
//     console.log("Promise Started");
//     setTimeout(()=>{
//         let success=true;
//         if(success){
//             resolve("Promise completed successfully");
//         }
//         else{
//             reject("Promise failed");
//         }

//     }, 2000);

// });

// promiseOne
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });


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
    const response=await fetch("./studentdata.json");
    console.log(response.status)
    const srdn=await response.json();
    return srdn;
    console.log("Message 2");
}
test1().then((res)=>{
    console.log(res);
});

console.log("Message 3");
