/*Create Promisees that will print username and password using resolve and reject and if usename and password 
not found then it will call reject state and print ERROR........ */

const promiseTwo=new Promise((resolve, reject)=>{
    // const username="john";
    // const password="123456";
    // if(username==="john" && password==="123456"){
    //     resolve({username, password});
    // }
    // else{
    //     reject(new Error("ERROR........"));
    // }
    setTimeout(function(){
        let err=false;
        if(err!=true){
            resolve("user: ABC; password: 123456");
        }
        else{
            reject("ERROR...: DATA FAIL!!");
        }
}, 2000);

})
promiseTwo.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});