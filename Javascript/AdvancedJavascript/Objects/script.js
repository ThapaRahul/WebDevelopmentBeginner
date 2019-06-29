// reference type

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// context vs scope

// scope

function b() {
    let a = 4;
};

// context

// tells us where we are within object

const object4 = {
    a: function(){
        console.log(this);
    }
}

// instantiation

class Player {

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}. I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Weeeee I.m a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');


