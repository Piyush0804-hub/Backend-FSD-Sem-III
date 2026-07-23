//Synchronous and Asynchronous
console.log("Task 3");
function hello1(){
    console.log("Task 1");
}
hello1();
console.log("Task 2");

const hello2=()=>{
    console.log("Task 1");
    setTimeout(function(){
        console.log("Task 2");
    },2000);
}
hello2();
console.log("Task 3");

//callback: passed as an argument to another function and called inside that function
function hello3(n1,n2,callback){
    console.log("Task 1");
    let sum=n1+n2;
    callback();
    return sum;
}
let a=10;
let b=20;



console.log(hello3(a,b));
function hi(){
    console.log("Say Hello");
}
hi();
function demo(){
    console.log("Demo function");   
}
demo();

console.log(hello3(a,b,hi));
console.log(hello3(a,b,demo));
