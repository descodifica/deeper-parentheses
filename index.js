const objectMap = require('object.map')

const deeperParentheses = (_expression = '', _method) => {
    if (_expression.indexOf(')') === -1) return _method(_expression)

    let expression = ''

    while (true) {
        const end = _expression.indexOf(')')

        if (end === -1) break

        let subexpression = _expression.slice(0, end + 1)
        let init = subexpression.lastIndexOf('(')

        subexpression = subexpression.slice(init)
        expression += _expression.split(0, init)
        expression += _expression.split(subexpression).join(_method(subexpression))
        _expression = _expression.slice(end + 1)
    }

    return _method(expression)
}

module.exports = deeperParentheses