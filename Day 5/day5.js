//Event 
//Create a custom EventEmitter that triggers "Greet" or "Exit".
const EventEmitter = require('events');
class MyEvent extends EventEmitter {
    
}
const myEmitter = new MyEvent();

myEmitter.once('Greet',(name)=>{
    console.log(`Hello, ${name}!!!`);
});

myEmitter.on('Exit',()=>{
    console.log('Goodbye, world!');
});

myEmitter.emit('Greet', 'Piyush');
myEmitter.emit('Greet', 'Piyush');//it will not print the second time because we used once() method for Greet event
myEmitter.emit('Greet', 'Piyush');
myEmitter.emit('Greet', 'Piyush');
myEmitter.emit('Exit');

class Button extends EventEmitter { 
    click=()=>{
        onclick();
    }
}