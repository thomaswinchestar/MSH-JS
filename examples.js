// JS basics quick examples for lecture demos

// Literals and identifiers
const greeting = "Hello"; // string literal
const answer = 42; // number literal
const isReady = true; // boolean literal
const person = { name: "Ada" }; // object literal

// Variables: prefer const; use let when you need reassignment
let counter = 0;
counter += 1; // now 1

// Expressions vs statements
const sum = 2 + 3; // expression producing 5
if (sum > 4) { // if statement using an expression
    console.log("sum is big enough");
}

// Operators
const score = 87;
const passed = score >= 60; // comparison
const grade = score >= 90 ? "A" : "B"; // ternary expression

// Optional chaining and nullish coalescing
const user = { name: "Lee", contact: { email: "lee@example.com" } };
console.log(user.contact ? .email); // "lee@example.com"
console.log(user.contact ? .phone ? ? "N/A"); // "N/A" because phone is missing

// Functions
function add(a, b) {
    return a + b;
}

const multiply = (a, b) => a * b;

// Arrays and iteration
const numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Mutation with const binding (object contents can change)
const settings = { theme: "light" };
settings.theme = "dark"; // allowed; binding stays the same

// Truthiness check and short-circuiting
const title = "";
const safeTitle = title || "Untitled"; // empty string is falsy
const safeName = user.name && user.name.toUpperCase(); // only runs toUpperCase if name exists

// Expression statement vs declaration statement
add(5, 7); // expression used as a statement (expression statement)
const doubled = numbers.map(n => n * 2); // expression inside another expression

// Semantics: business meaning of operations
function addItem(cart, item) {
    // Adds price to total; changing + to - flips meaning.
    return {...cart, total: cart.total + item.price };
}

// Pragmatics: safe fallbacks and guards
const displayName = user ? .profile ? .displayName ? ? user ? .email ? ? "Guest";

// Pragmatics: predictable equality in auth checks
function isAuthorized(sessionUserId, expectedId) {
    return sessionUserId === expectedId; // avoid == coercion surprises
}

// Semantics + pragmatics: parse-then-use with validation
function safeQuantity(inputQty) {
    const qty = Number.parseInt(inputQty, 10);
    return Number.isFinite(qty) && qty >= 0 ? qty : 0;
}

function totalPrice(price, inputQty) {
    const qty = safeQuantity(inputQty);
    return price * qty;
}