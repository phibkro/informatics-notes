---
title: Javascript
---
- Scripting language
- Just-in-time (JIT) compiled
- Dynamic typing
- Prototype-based object-orientation
  - Prototypical inheritance
- First class functions
- Single-threaded
- Conforms to ECMAScript standard
- Multiparadigm
  - Event driven
  - Functional
  - Imperative

# Typescript
- Syntaktisk "superset" av JavaScript
- "Transkompilerer" til JavaScript
- Two ways of assigning type
  - Explicit declaration `let letter: string `
  - Implicit type inference `const num = 5`
## Objects and interfaces
- Interfaces describe objects

# How does the event loop function?
Three main components of the event loop
- Stack
- Heap
- Queue

## Stack
Function calls form a stack of _frames_
```javascript
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); // assigns 42 to baz
```
Order of operations:

1. 
## Heap
Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.
## Queue
A message queue with a list of messages to be processed. Each message has an associated function that gets called to handle the message.

## Event loop
While the stack is empty, the next message is processed and the associated function is pushed onto the stack.