const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('SaveEvent', () => {
    console.log('saving event occured!');
});





const saveFile = () => {

    console.log("saving file simulation");
    myEmitter.emit('SaveEvent');
    console.log("finish.");
};


setTimeout(saveFile, 3000);