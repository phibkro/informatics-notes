# Questions

## 1. What is the difference between `position: absolute` and `position: fixed`?

`position: absolute` positions the element relative to its closest positioned ancestor using the properties `top`, `bottom`, `left`, `right`

`position: fixed` positions the element relative to the viewport using the properties `top`, `bottom`, `left`, `right`

## 2. With CSS3, how do we access the third element within another element?

You use the `:nth-child()` pseudo-class on the parent of the elements and pass `3` as the argument.

## 3. What will the CSS snippet at the end of this section do if the visitor is browsing on a device with `320 x 568`resolution?

It will do nothing. The logo is not hidden.

The media query is a condition where the screen has to be atleast 768px, but not more than 1024px to apply

1024 > screen > 768
