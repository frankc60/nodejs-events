var util = require("util"),
	events = require("events");

function modEmitter (opts){
	events.EventEmitter.call(this);
}
util.inherits(modEmitter, events.EventEmitter);



function returnAfterXseconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("done");
      }, (x * 1000) );
  });
}



modEmitter.prototype.openRecord = async function x(opt) {
    //open db and get record, then emit 
    //is an async function so the await pauses sequentially before getting promise returned. like a wait() but async.
    let newOpt = opt + "-1234567890";
    this.emit('ConnectionUpdated','opened');
    const a = await returnAfterXseconds(4);
    this.emit('RecordRetrieved',newOpt);
    const b = await returnAfterXseconds(2);
    this.emit('ConnectionUpdated','closed');
}



module.exports = modEmitter;