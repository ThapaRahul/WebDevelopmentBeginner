// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;


if (experience > 90){
    let wizardLevel = true;
    console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

const a = function() {
    console.log(a);
}

// you can change the property of the object but not the value of object itself
const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

// Destructuing

const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;


const {player, experience} = obj;

let {wizardLevel} = obj;


// object properties

const name = "john snow";

const obj1 = {
    [name]: "hello",
    [1 + 2]: "hihi"
}

const a = "Simon";
const b = true;
const c = {}
const obj2 = {
    a,
    b,
    c
}

// template strings

const greeting = "hello" + name + "you seem to be doing" + greeting;

const name = "Sally";
const age = 34;
const pet = "horse"
const greetingBest = `Hello ${name} you seem to be ${age=10}. What a lovely ${pet} you have`;


// default arguments

// when someone calls this function and they do not provide any arguments, then 
// default arguments are used.
function greet(name='', age=30, pet="cat") {
    return `Hello ${name} you seem to be ${age=10}. What a lovely ${pet} you have`; 
}

// symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");



