---
title: How to write better code
---

Adapted from [How I program C](https://youtu.be/443UNeGrFoM?si=obrdXaF0KUeI0Qif)

## In the beginning you want results, in the end all you want is control

### Avoid ambiguity

We think of code as a way of communicating with the **computer**, but what is equally or more important is that code communicates to **us** what a computer does.

*You spend more time reading your own code than the compiler does*\
Your code has to be readable for you. *Your compiler is your friend*

### Don't be "clever"

#### Example: Operator overloading

```C
vec_a = vec_b * vec_c;
// what does this do?
// is this pairwise multiplication or dot product?

vector_mult(vac_a, vec_b, vec_c);
vector_dot(vac_a, vec_b, vec_c);
// unambigious
// explicitly tells you whether its multiplication or dot product
```

### Code style

Good code is wide code

Choose a convention/standard and **stick to it**

Be unique with your clothing style, not your coding style

When in doubt follow the majority

#### Variable naming conventions

Convention | Example | Recommended use case
--- | --- | ---
PascalCase | MyType | types
camelCase | myFunction() | functions
kebab-case | my-thing |
snake_case | my_variable | variables

#### Re-use names

Define words:

```C
/* 

array // array of data
type // usually an enum
node // links to other nodes, not a linked list
entity // generic networked thing
handle // pointer to opaque data structure
func // postfix for function pointers or function used as function pointer
internal // function internal to a module

i, j, k, count, length, found, next, previous, array, list, f, vec...

*/
```

#### Function names

```C
// bad:

create_object();
destroy_object();
move_object();

// worse:

create_object();
remove_object(); // opposite of "create" is "destroy", not "remove"
move_movable();

// better:
object_create()
object_destroy()
object_move()

// best:
// supports autocompletion very well as well
// write code for you IDE
module_object_create();
module_object_destroy();
module_object_move();

```

#### Spacing

##### Function calls

`func()` is easier to search for than `func ()`

```C
my_function_object_create()
my_function_object_create_special()
```

##### Comparisons

```C
// bad

a==b
a=b

// good

a == b
a = b

// try searching for

"a ="

// with the second one you get find both cases 
```

### Long functions aren't necessarily bad

What is easier? Reading through a long page or flipping through a choose-your-own adventure book with 50 pages of 5 sentences per page?

Only modularize/abstract when it is beneficial

### API design

TODO

### C & OOP-style APIs

```C
// OOP in OOP language

object thing()
thing.do_something()

// in C

thing = object_create();
object_do_something(thing);
```

use void pointers
