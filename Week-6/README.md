# Week 6 — JavaScript Control Flow & Loops

This week covers:
- Control flow: blocks, `if/else`, `switch`, ternary
- Error handling: `try/catch/finally`
- Loops: `while`, `do...while`, `for`
- Loop control: `break`, `continue`
- Iteration: `for...in` vs `for...of`
- Iterable protocol: why `for...of` works (`[Symbol.iterator]`)

## How to run

1. Open `Control_Flow_and_Loops.html` in your browser.
2. Open DevTools → **Console**.
3. Try these helpers:

```js
week6.help()
week6.runAll()

week6.controlFlow()
week6.tryCatch()
week6.loops()
week6.iterables()

week6.dom()
week6.domAll()
```

Tip: Most demos log results to the console, and the DOM demos also update text on the page.

## What to click (DOM demos)

Inside the page you can interact with small UI examples:
- **Age → Authorized/Not Authorized** (if/else + ternary)
- **Traffic light** (switch)
- **Parse JSON** (try/catch)
- **Countdown** (while vs do...while)
- **Process numbers** (break/continue)
- **Render profile** (for...in over object keys)
- **Render range** (custom iterable + for...of)
- **Select counter** (classic `for` loop)
- **Mark paragraphs read** (`for...of` over NodeList)

## Suggested practice (quick exercises)

- Change the traffic light demo to include a new case (e.g. `"flashing"`).
- In the JSON demo, `throw` a custom error when the parsed object is missing a required field.
- In the “Process numbers” demo, also skip numbers greater than 100 using `continue`.
- In the range demo, support descending ranges (e.g. 10 down to 1) by changing the iterable.

## Notes

- Prefer `for...of` for arrays and other iterables.
- Prefer `for...in` only for object keys (and usually guard with `Object.hasOwn(...)`).
