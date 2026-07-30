//Event
//EventEmitter- 
//  on(emit event parameter, callback)<-This on() registers an event listener,
//  emit(event parameter)<-This emit() trigger/create/fire event
const EventEmitter=require("events");
const event=new EventEmitter();
event.on("Greet",()=>{
    console.log("This is an event listener");
})
event.emit("Greet");

const event1=new EventEmitter();
event1.on("INFO",()=>{
    console.log("My name is Piyush Gupta.");
    console.log("My age is 20.");
    
})
event1.emit("INFO")