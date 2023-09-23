---
title: Monad
---

- is a structure that implements bind, a map method that wraps the output in a type
- is a design pattern in which [pipeline implementation](../Anti-patterns/Pipeline%20implementation.md) are abstracted by wrapping a value in type
- is a type of [functor](./Functor.md) with extra properties within the bind method
  - Functions being passed in bind calls must have as their return types an instance of the monad being used. The bind method of a monad would then need to "unwrap" that value.
- is implemented using Object instances with a `bind` method
- refactors an imperative implementation into declarative statements
- effectively simulates [mutable](../Concepts/Mutability.md) [state](../Concepts/State.md) using immutable data

An implementation of a monad is a Maybe type.

```typescript
class Maybe<T> {
  const value = T | undefined
  // takes T as input and returns T wrapped in Maybe
  function wrap<T>(input:T):Maybe<T> {
    return Maybe(input)
  }
  function bind<T>(
    // takes a wrapped value as input
    input: Maybe<T>, 
    // and function to apply to the value
    transform: (_:T) => Maybe<T>
    ):Maybe<T> {
      if (input === none) {
        return none
      }
      return transform(input.value)
  }
  return
}
```

## Video resources

- [Haskell: Monads. A 5-minute introduction](https://youtu.be/_Gk_lwhJMzk?si=F70OX1zMgiSpqfV0)
- [The Absolute Best Intro to Monads For Software Engineers](https://youtu.be/C2w45qRc3aU?si=kPNfRatMyNnAAJ7c)
