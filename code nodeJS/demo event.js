var events = require('events');
var eventEmitter = new events.EventEmitter();
    //create listener 1
var listener1= function listener1(){
    console.log("this is listener 1.");
};
//create listener 2
var listener2= function listener2(){
    console.log("this is listener 2.");
};
    //bind event-listener
eventEmitter.on('connection', listener1);
eventEmitter.on('connection', listener2);
    // count number of event-listener listed
var countEveLis = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(countEveLis);
    //fire first event
eventEmitter.emit('connection');
    //remove listener 1
eventEmitter.removeListener('connection', listener1);
console.log('\nlistener 1 is removed.\n');
    //fire second event
eventEmitter.emit('connection');
countEveLis = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(countEveLis);