console.log("Programme Started");
const events = require('events');
const { eventNames } = require('process');

//return Class of event Emitter
const EventEmitter= events.EventEmitter;

//creating an instance/Object of event Emitter
const eventEmitter = new EventEmitter();

//Creating an Instance of event Emitter in Single line
const eventEmitter2 = new events.EventEmitter()

console.log("event Emitter",eventEmitter);

//listening to event
eventEmitter.on('test',()=>{
    console.log("test Event Excecuted");
})

eventEmitter.on('test',()=>{
    console.log("test 1 Event Excecuted");
})


//execute event
eventEmitter.emit('test')
eventEmitter.emit('test')

console.log("event Emitter",eventEmitter);
console.log("Event Emitter Class",EventEmitter);



eventEmitter.on('test',()=>{
    console.log("test 2 Event Excecuted");
})

eventEmitter.on("add",(a,b)=>{
    console.log("Sum",(a+b));
})

eventEmitter.emit('add',10,20)

eventEmitter2.on('print',()=>{
    console.log("printing the Data");
})

eventEmitter2.emit('print')

//Below code is Invalid
// eventEmitter.emit('print')

eventEmitter.once('myEvent',(data)=>{
    console.log('Once-----',data);
})

const EventNames = eventEmitter.eventNames()
console.log('eventNames',EventNames);

eventEmitter.emit('myEvent', 'Executed Once')
eventEmitter.emit('myEvent', 'Executed twice')
eventEmitter.emit('myEvent', 'Executed thrice')



console.log("Programme ended");