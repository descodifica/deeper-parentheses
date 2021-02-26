# @desco/deeper-parentheses

> Performs a method passed first at the deepest levels of a given expression to the most accurate levels.

## Install

``` bash
npm install --save @desco/deeper-parentheses
```

## Use

``` js
const deeperParentheses = require('@desco/deeper-parentheses' )

const expression = '((name = Rafael AND sign = Cancer) || name = Tiago) || (age = 32 || age = 31)'

const result = deeperParentheses(expression, _subexpression => {
    // Displayed:
    //// (name = Rafael AND sign = Cancer)
    //// (ok || name = Tiago)
    //// (age = 32 || age = 31)
    //// ok || ok
    console.log(_subexpression)

    return 'ok'
})

// Displayed: ok
console.log(result)
```