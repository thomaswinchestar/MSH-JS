//Procedure - Statements
//Pseudocode
// procedure add {
//   let a = 1;
//   let b = 2;
//   print a + b;
// }

//call add; //3


//Function
//(x, y) -> funtion parameter
// function add(x, y) {
//   let a = x;
//   let b = y;
//   //print a + b;
//   return a + b;
// }

//pseudocode
//call add(2, 3); // 5

//add(2, 3); //5

// let result = add(2, 3);
// result + 2;

// function add (a, b) {
//   return a + b;
// }

// function circle(r) {
//   const PI = 3.14;
//   return PI * r * r;

// }

// function greet() {
//   console.log("Hello, World!");
// }

// function sayHello(name) {
//   console.log(`Hello ${name}`)
// }

// add(7, 8);
// circle(3);
// greet();
// sayHello("Alice");

//Naming Function same with Variable, can use small letter Capital Letter, can include numbers but cannot start with numbers, cannot include special character(!@#$%^&*), " ", can use __, can use $ 

// function add(a, b) {
// console.log('Start adding')
// return a + b
// console.log('Done adding')
// }
// let result = add(1, 2)
// console.log(result)

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if ( b === 0) {
//     return "Cannot divide by zero";
//   }
//   return a / b;
// }

// console.log(add(5,3));
// console.log(subtract(10,4));
// console.log(multiply(6,7));
// console.log(divide(10,2));
// console.log(divide(10, 0));


//Default & Rest Parameters

// let b;
// function add(a, b){
//   return a + b 
// }

// add(1, 2, 3, 4);
// add(1);


// undefined + number (1)

//Default Parameter
// function add(a, b = 0) {
//   return a + b
// }
// add(1, 2);
// add(1);

//JS Rest Parameter

// function add(a, b, ...c) {
//   console.log(c);
// }

// add(1, 2, 3, 4, 5);

//function expressions
// let a = -1 + 2;

// let greet = function greeting() {
//   console.log("Hello World!")
// }

// greet();

//Anonymous Function - Nameless Function

// let greet = function () {
//   console.log("hello wolrd!")
// }
// greet()

//IIFE - Immediately Invoked Function Expression

// (function (a, b) {
//   return a + b
// })(1, 2)


//Most Usecase Function Expression

// function twice(num, fun) {
//   let result = fun(num)
//   return result * 2
// }

//twice(Number, Function)
// fun(5)
//Callback
// twice(5, function(x) {
//   return x + 1
// })

//function(5){

// twice(5, function (x) {
//   return x * x;
// });
//nested function, closure, recursive function, this keyword binding


// Arrow Functions - () =>

// let add = function (a, b) {
//   return a + b
// }

// let add = (a, b) => {
//   return a + b
// }

//only one statement
//let add = (a, b) => a + b;

//only one parameter
// let two = n => n * 2;

//no parameter
// let hello = () => "Hello World";
// hello();

//no parameter and use underscore instead of () parentheses
// let hello = _ => "Hello World";
// hello();


// Callback Arrow Function
// let twice = (n, f) => f(n) * 2;


// twice(5, x => x + 1);
// twice(5, x => x * x);

//Function Hoisting / Lifting

//variable hoisting
// var r = a + b;
// var a = 1;
// var b = 2;

//pseudocode

// var a
// var b
// var r = a + b
// a = 1
// b = 2


// add (1, 2);

// function add(a, b) {
//   return a + b;
// }


// add(1, 2);


// let add = function (a, b) {
//   return a + b;
// }

//Name Conflict


// Variable Scope
// let name = "Alice"

// function welcome() {
//   console.log(`Welcome ${name}`)
// }

// function hello() {
//   console.log(`Hello ${name}`)
// }

// welcome()
// hello()

// function welcome() {
//   let name = "Alice"
//   console.log(`Welcome ${name}`)
// }

// function hello() {
//   console.log(`Hello ${name}`)
// }

// welcome()
// hello()