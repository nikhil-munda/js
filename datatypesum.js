// Primitive

// 7types: string, number, boolean, null, undefined, symbol, bigint


const score = 100
const scoreValue= 100.4
const isLoggedIN= false
const OutTemp= null
let userEmail= undefined

const id= Symbol('123')
const idi= Symbol('123')

console.log(id);
console.log(idi);
console.log(id===idi);


const bignumber= 617945146785116n


//Reference (Non Primitive)

// Array, Objects, Functions


const egirls = ["cherie", "rose", "bubbli", "isha", "megumi"]

let myObj ={
    name: "nikhil",
    age:"20"
}

const thefunct= function(){
    console.log("Hey harry");
    
}

console.log(typeof bignumber);
console.log(typeof OutTemp);
console.log(typeof userEmail);
console.log(typeof thefunct);


//stack - (Primitive)    ,    Heap (Non Primitive)