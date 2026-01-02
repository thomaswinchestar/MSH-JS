//JS Arrays & Objects

//Apple -> red, sweet, swoar
//Cat -> black hair, run, 

//Property
//Method

//Array -> JS Standard Object
//Compound Type or Structure Type

//Array Object Constructor
//let mix = new Array("Bob", 3.14, true);

//let name = "mgmg", let lastname = 'kyaw kyaw' - String Literal

//Array Literal

// let mix = ["Bob", 3.14, true];
// let mix1 = [];

//Statically Typed Language(java, C#, etc)

//Pseudocode

// let nums [i32, 5] = [ 1, 2, 3, 4, 5];
// let mix [str, f32, bool] = ["Bob", 3.14, true];

// let mix = ["Bob", 3.14, true];

// let name = mix[0];
// name;
// let num = mix[1];
// num;
// let out = mix[3];
// console.log(out);

// mix[0] = "Alice";
// mix[4] = 5;
// mix;

//Array Length


// let fruits = [ "Apple", "Orange"];

// fruits.length;
// fruits[2] = "Mango";
// fruits;
// fruits.length;
// fruits[fruits.length - 1];

// let mix = [ [123, 456, 789], ['Ant', 'Cat', 'Dog'] ];

// let nums = mix[0];
// nums;
// let animals = mix[1];
// animals;

// let x = mix[0][1];
// x;

// let rambo = mix[1][2];
// rambo;

//Array Methods - push(), pop(), shift(), unshift()

//push() 

//pop()

//shift()

//unshift()

// let animals = ["Dog", "Cat", "Bird"];
// console.log(animals);
// animals.push("Cow");
// animals;
// animals.pop();
// animals;
// animals.shift();
// animals;
// animals.unshift("Ant");
// animals;

//indexOf(), splice()

// let fruits = ["Apple", "Orange", "Mango", "Banana"];

// fruits.indexOf("Mango");

// fruits.splice(2, 1);
// fruits;

//join()

// let fruits = ["Apple", "Orange", "Mango"];

// let result = fruits.join(" , ")
// result;


//map(), filter(), reduce()

//map()
// let nums = [1, 2, 3, 4, 5];

// let result = nums.map(function(n){
//   return n + 1;
// });

// result;

//filter()
// let nums = [ 1, 2, 3, 4, 5];

// let result = nums.filter(function(n) {
//   return !(n % 2); // 0 -> false, 1or2 -> true
// })

// result;

// let nums = [ 1, 2, 3, 4, 5];

// let result = nums.map(n => n + 1);
// result;

// let odd = nums.filter(n => n % 2);
// odd;


//map and filter

// let nums = [ 1, 2, 3, 4, 5];

// let result = nums.map( n => n + 2).filter(n => n % 2); //Method Chaining - map [3, 4, 5, 6, 7]
// result;

//nums.map() -> [Array].filter() -> [Array]


//reduce()

// let nums = [2, 3, 4, 5, 6];

//Accumulative Value
// let result = nums.reduce(function(a, n){
//   return a + n;
// });

// a -> null, n = 2, null + 2 = 2

// a = 2, n=3 , a = 5
// a = 5, n=4, a = 9

// let result = [2, 3, 4, 5, 6].reduce((a, n) => a + n);

// result; 


//Array Spread & Destructuring

// let nums = [1, 2, 3];
// let alphas = [ 'a', 'b', 'c'];
// let result = [ nums, alphas ];
// result;

// let nums = [1, 2, 3];
// let alphas = [ 'a', 'b', 'c'];
// let result = [ ...nums, ...alphas ];
// result;


// let nums = [ 1, 2, 3];
// let four = [ ...nums, 4];
// four;

// let zero = [ 0, ...nums];
// zero;


// function add(a , b) {
//   return a + b;
// }

// let nums = [123, 456];

// // add(nums[0], nums[1]);

// add(...nums);

//Array Destructuring

// let nums = [123, 456];

// let a = nums[0];
// a
// let b = nums[1];
// b
// let [a , b] = nums;
// nums;

// function add([a, b]) {
//   return a + b;
// }

// let nums = [123, 456];
// add(nums);


// const [ count, setCount ] = useState(null)


//String Object
//toFixed()

// let num = 3.14159;

// num.toFixed(3);

// let arrOne = new Array();
// let arrTwo = [] 

//String Constructor, String Literal('', ""), Template Literal(``)

// let name = "Bob";
// let greet = `Hello ${name}`;
//let welcome = new String("Welcome");

// name.length;
//welcome
// 'Hello'.length;

// let name = "Alice";
// name[2];
// name.charAt(0);

//toUpperCase(), toLowerCase(), trim(), substr(), split()


// let name = "Alice";

// name.toUpperCase();
// name.toLowerCase();
// name.substr(0, 3);

// let text = " Hello World ";
// text.trim();

// let text = "Hello World";
// text.split(" ");

//text.split(); //['H','E','L', 'L', 'O', 'W', 'O', 'R', 'L', 'D']

//String -> split(), Array -> join()

//search(), replace() -> Regular Expression 


// String.prototype.greet = function () {
//   return "Hello, World!";
// }

// let str = "Some String";
// str.greet();


//Creating Objects


//Object Literal
// let cat = {
//   color: "Yellow",
//   legs: 4,
//   age: 5, // Trailing Comma
// }

// cat.legs;
// cat["color"];

// let bird = { color: "Green", legs: 2 };

// bird.name = "Shwe Gal";
// bird["color"] = "Blue";
// bird.color = "Green";
// bird;

// let user = { name: "Bob", age: 22 };

// function greet({name, age}) {
//   return `Hello ${name}, you are ${age} years old`;
// }

// greet(user);

// let { name , age } = user;

// name;
// age;


// let user = {
//   name : "Bob",
//   hello: function () {
//     return `Hello, I'm ${this.name}`;
//   },
// }

// user.name;
// user.name = "Alice";
// user.hello();


// let user = {
//   name : "Bob",
//   hello() {
//     return `Hello, I'm ${this.name}`
//   }
// }

// user.name;
// user.name = "Alice";
// user.hello();


// let name = "Alice";
// let age = 22;

// let user = { name , age }; //Property Shorthand
// user.name;
// user.age;

// Array, Object, Stacks, Queues, Linked List, Trees, Graphs (Data Structure)

//Object + Array
// let person = {
//   name : "Bob",
//   age: 22,
//   education: [
//     "B.Sc.",
//     "MBA",
//   ]
// }

//pseudocode
// let people = [
//   { name : "Alice", age: 21, gender: "Female"},
//   { name : "Bob", age: 22, gender: "Male"},
//   { name : "Zack", age: 24, gender: "Male"},
// ]

// people.map( p => p.name);

// people.filter( p => p.gender === "Male");

//JSON - JavaScript Object Notation

// {
//   "name" : "Bob",
//   "age": 22,
//   "gender": "Male"  
// }

// String, Number, Boolean, null, Array, Object

//JSON.stringify()

// =========================
// Week 5 Demo Runner (Browser Console)
// Open: JS_Array_and_Objects.html → DevTools Console
// =========================

(function runWeek5Demos() {
    console.log("=== Week 5: Arrays & Objects (Demo) ===");

    // Arrays: properties + methods
    const animals = ["Dog", "Cat", "Bird"];
    console.log("animals:", animals);
    console.log("animals.length:", animals.length);

    animals.push("Cow");
    console.log("after push('Cow'):", animals);

    const popped = animals.pop();
    console.log("popped:", popped, "animals:", animals);

    const shifted = animals.shift();
    console.log("shifted:", shifted, "animals:", animals);

    animals.unshift("Ant");
    console.log("after unshift('Ant'):", animals);

    const fruits = ["Apple", "Orange", "Mango", "Banana"];
    console.log("fruits.indexOf('Mango'):", fruits.indexOf("Mango"));
    console.log("fruits.includes('Mango'):", fruits.includes("Mango"));
    console.log(
        "fruits.find(startsWith 'M'):",
        fruits.find(f => f.startsWith("M"))
    );
    console.log(
        "fruits.findIndex(startsWith 'M'):",
        fruits.findIndex(f => f.startsWith("M"))
    );

    const fruitsRemoved = [...fruits];
    fruitsRemoved.splice(2, 1);
    console.log("splice remove Mango:", fruitsRemoved);

    console.log("join example:", ["Apple", "Orange", "Mango"].join(" , "));

    console.log("fruits.slice(1, 3):", fruits.slice(1, 3), "original:", fruits);

    const prices = [30, 5, 12, 100];
    console.log("prices sorted asc (copy):", [...prices].sort((x, y) => x - y));

    // map / filter / reduce
    const nums = [1, 2, 3, 4, 5];
    console.log("nums.map(+1):", nums.map(n => n + 1));
    console.log("nums.filter(odd):", nums.filter(n => n % 2));
    console.log("nums.reduce(sum):", nums.reduce((a, n) => a + n, 0));
    console.log("nums.some(n > 4):", nums.some(n => n > 4));
    console.log("nums.every(n > 0):", nums.every(n => n > 0));

    // Spread & destructuring
    console.log("spread [ ...nums, 6 ]:", [...nums, 6]);
    const [a, b] = [123, 456];
    console.log("destructuring [a, b] from [123, 456]:", a, b);

    // Objects: properties + methods (+ this)
    const user = {
        name: "Bob",
        age: 22,
        hello() {
            return `Hello, I'm ${this.name}`;
        },
    };
    console.log("user.name:", user.name);
    console.log("user['age']:", user["age"]);
    console.log("user.hello():", user.hello());

    const { name, age } = user;
    console.log("object destructuring {name, age}:", name, age);

    console.log("Object.keys(user):", Object.keys(user));
    console.log("Object.entries(user):", Object.entries(user));
    console.log(
        "hasOwnProperty 'name':",
        Object.prototype.hasOwnProperty.call(user, "name")
    );

    // Object + Array together (common real-world shape)
    const people = [
        { name: "Alice", age: 21, gender: "Female" },
        { name: "Bob", age: 22, gender: "Male" },
        { name: "Zack", age: 24, gender: "Male" },
    ];
    console.log("people.map(name):", people.map(p => p.name));
    console.log("people.filter(Male):", people.filter(p => p.gender === "Male"));

    // JSON: stringify / parse
    const person = { name: "Alice", age: 21 }; // JS Object
    const jsonText = JSON.stringify(person);
    console.log("JSON.stringify(person):", jsonText);
    console.log("JSON.parse(jsonText):", JSON.parse(jsonText));
})();