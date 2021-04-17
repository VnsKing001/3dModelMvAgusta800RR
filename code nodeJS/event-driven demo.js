var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler= function connected(){
    console.log("connect successful.");
    eventEmitter.emit('data_received');
}

// bind connection event listener
eventEmitter.on('connection', connectHandler);
// bind data_received event listener
eventEmitter.on('data_received', function(){
    console.log('data received.');
});
//fire connection
eventEmitter.emit('connection');
console.log("program ended!");
