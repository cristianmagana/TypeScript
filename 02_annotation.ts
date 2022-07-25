// Type Aannotation - Code we add to tell Typescript what type of value 
//  a variable will refer to.
// * we developers tell TS the type.

const apples: number = 5; 

// Array 
let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, true, false];


// Classes
class Car {
};

let car: Car = new Car();

// Object Literal 
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

// Function (i: number) => void is the annotation, = (i:number) => fx parameters 
const logNumber: (i: number) => void = (i:number) => {
    console.log(i)
}

// Type Inference - Typescript tries to figure out what type of value
//  a vriable refers to. 
// * Typescript guesses the type.

const apple = 5;

let colors2 = ['red', 'green', 'blue'];
let truths2 = [true, true, false];

const logNumber2 = (i:number) => {
    console.log(i)
}