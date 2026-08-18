//simulate DOM-like event handling in NOde.js using 
//addEventListener-.on()
const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on("click",(name)=>{
    console.log(`Click Event Triggered ${name}`)
});
emitter.on("mouseHover",(roll)=>{
    console.log(`Mouse-Hover Event Triggered and your roll no. is ${roll}`)
});

emitter.emit('click', "Piyush Gupta");
emitter.emit('mouseHover', 2503201000812); 