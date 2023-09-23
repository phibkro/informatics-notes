---
title: Functor
--- 

- is a structure which supports the map method.
  - Examples: Lists and binary trees.
- is a [design pattern](../Design_patterns.md) inspired by the definition from category theory ([mapping between categories](https://en.wikipedia.org/wiki/Functor))
- allows one to apply a function to values inside a generic type without changing the structure of the generic type.

Functors form a base for more complex abstraction like [monads](Monad.md)

In Haskell this idea can be captured in a type class:

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```

In Haskell, lists are a simple example of a functor. We may implement fmap as:

```haskell
fmap f []     = []
fmap f (x:xs) = (f x) : fmap f xs
```
