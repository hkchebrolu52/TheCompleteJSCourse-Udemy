// Lecture: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); //Uncaught TypeError: Assignment to constant variable.
*/

//Constants are immutable in ES6

//Variables declared with var in ES5 are function scoped.
//But Variables declare with let and const in ES6 are block scoped.
  //A block scope is any code wrapped in between curly braces({ }).

// ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    //console.log(firstName) //undefined
    var firstName = 'John';
    var yearOfBirth = 1990;
    //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);

//ES6
function driversLicense6(passedTest) {

  //console.log(firstName); //Uncaught ReferenceError: firstName is not defined(...)
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
    const yearOfBirth = 1990;
  //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);

// var versus let
//the value of 23 will be overwritten
/*
var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
//Will print
//0
//1
//2
//3
//4
//5
*/

//both 'i' are seperate variables, because let is block scoped

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
//Will print:
//0
//1
//2
//3
//4
//23