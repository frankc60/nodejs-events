var util = require("util"),
	events = require("events");

function modEmitter (opts){
	events.EventEmitter.call(this);
}
util.inherits(modEmitter, events.EventEmitter);

modEmitter.prototype.openRecord = function(opt) {
    //open db and get record, then emit 
    let newOpt = opt + "-1234567890";
    let timeout = setTimeout(()=> {this.emit('RecordRetrieved',newOpt);},4000);
};

module.exports = modEmitter;