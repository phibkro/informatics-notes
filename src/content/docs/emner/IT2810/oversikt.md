---
title: IT2810
---
[Tilbake til oversikt](../README.md)

## Praktisk info

- Onsdag er innleveringsdag
- Ikke bruk css frameworks

## Intro stuff

Web Hypertext Application Technology Working Group (WHATWG)
have preceded W3C

### What's new in ES6?

- `let` and `const`
  - Uses `block` scope instead of `function` or `global` scope like `var`
- Arrow functions `( parameters ) => { function body }`
  - Shorthand syntax for functions
  - Inherits `this` from the context its defined in
  - Syntactical sugar (?)
- `import` and `export`
  - introduces modularity in Javascript code

### Funksjonell programmering

- Paradigme
- Deklarativt, ikke imperativt

#### Hvorfor funksjonell programmering?

- Funksjoner uten side-effekter
- Pure functions
  - Mindre kompleksitet
  - Forenkler testing

#### Destructuring

- Syntax for retrieval of values from arrays and objects

#### Spread-operator

- Henter ut verdier fra array eller object

```javascript
function map((a) => b, [a]) -> [b] {
  if ([a] === []) {
    return [];
  }
  map([])
} 
```

```haskell
map :: (a -> b) -> [a] -> [b]
  map fn [] = []
  map fn (x:xs) = fn x : map fn xs
```

```typescript
function map<A,B>(fn:(A) => B, A[]): B[] {
  return A[] === [] ? [] : map(...A[1:])
}
```

### Typescript

- Syntaktisk "superset" av JavaScript
- "Transkompilerer" til JavaScript
- Two ways of assigning type
  - Explicit declaration `let letter: string`
  - Implicit type inference `const num = 5`

#### Objects and interfaces

- Interfaces describe objects

### NodeJS

- is a JavaScript runtime
  - scalable
  - based on the V8 engine by Chrome
