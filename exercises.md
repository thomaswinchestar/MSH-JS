# JavaScript Basics Exercises

Use these during or after the lecture. Encourage students to predict outputs before running.

## 1) Syntax vs Semantics
Mark each as **expression** or **statement**, then explain the semantics (what it does):
- `let n = 5;`
- `n > 3`
- `if (n > 3) { n++; }`
- `sum(n, 2)`

## 2) Variables and Reassignment
What does this log?
```js
let count = 1;
const label = "Item";
count += 2;
console.log(label + " " + count);
```

## 3) Nullish vs OR
What logs and why?
```js
const username = "";
const displayA = username || "Guest";
const displayB = username ?? "Guest";
console.log(displayA, displayB);
```

## 4) Optional Chaining
Avoid crashing when `profile.contact` is missing. Fill the blank.
```js
const profile = { name: "Kai" };
const phone = profile.contact?.phone ?? "Unknown";
```
Explain why this is safer than `profile.contact.phone`.

## 5) Write a Function
Implement `maxOfThree(a, b, c)` that returns the largest number. Test with `(1, 9, 3)`.

## 6) Control Flow
Write a loop that logs even numbers from 2 to 10 inclusive.

## 7) Array Practice
Given `const nums = [1, 2, 3, 4];`, create a new array `squares` containing the squares of each number.

## 8) Object Mutation with const
Explain why this works and what it logs:
```js
const settings = { theme: "light" };
settings.theme = "dark";
console.log(settings.theme);
```

## 9) Short-Circuiting
What value does `safeName` hold and why?
```js
const user = { name: "Ada" };
const safeName = user.name && user.name.toUpperCase();
```

## 10) Stretch: Mini Program
Write a function `describeScore(score)` that returns:
- "A" when `score >= 90`
- "B" when `score >= 80`
- "C" when `score >= 70`
- "D" when `score >= 60`
- "F" otherwise
Use `if/else if/else` and test with a few scores.

## 11) Semantics vs Pragmatics in Practice
- Semantics: What happens if you change `cart.total + item.price` to `cart.total - item.price`?
- Pragmatics: Why is `user?.profile?.displayName ?? "Guest"` safer than `user.profile.displayName`?
- Pragmatics: In auth checks, why use `===` instead of `==`?
- Semantics + Pragmatics: How does validating `inputQty` before multiplying affect correctness?
