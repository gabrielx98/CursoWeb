const $ = require( "jquery" )

function calculadora(op, num1, num2) {
    switch (op) {
        case '+': return num1 + num2
        break;

        case '-': return num1 - num2
        break;

        case '*': return num1 * num2
        break;

        case '/': return num1 / num2
        break;
    }
}


