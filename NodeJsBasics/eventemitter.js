const events = require('events')

const eventEmitter = new events.EventEmitter();

const add=(a,b)=>{
    console.log('Sum',a +b);
};

eventEmitter.on('myEvent',add);

console.log('Event Names',eventEmitter.eventNames());

eventEmitter.removeListener('myEvent',add)

console.log('Event name After remove',eventEmitter.eventNames());

const eventEmitter2 = new events.EventEmitter()

eventEmitter2.on('myEvent 1',add)
eventEmitter2.on('myEvent 2',add)
eventEmitter2.on('myEvent 3',add)

console.log("Event names before remove",eventEmitter2.eventNames());

eventEmitter2.removeAllListeners()
console.log("Event names after remove",eventEmitter2.eventNames());

