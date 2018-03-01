const events= require('events'),
    util    = require("util");



let myEmitter = new events.EventEmitter();

myEmitter.on('SaveEvent', () => {
    console.log('saving event occured!');
});

const saveFile = () => {

    console.log("saving file simulation");
    myEmitter.emit('SaveEvent');
    console.log("finish.");
};


setTimeout(saveFile, 3000);

//*************************************************************************** */

//create student object, with property
const Student = function(name) {
    this.name = name;
    this.doTest = (testName) => {
        console.log(`doing the '${testName}' test!`);
        //emit on this method.
        this.emit("grade", 96);
    }
}

//give Student object event emitters methods.
util.inherits(Student, events.EventEmitter);


//create a new instance of Student object - constructor
let pete = new Student("pete");

//call on method event emitter on Student object (from inheriting)
pete.on("grade", (grade) => {
    console.log(`${pete.name} has finished his test, 
    and got graded with a '${grade}' mark.`);
});


//call method from object Parent (function)
pete.doTest("aa");



