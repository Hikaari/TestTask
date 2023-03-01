const BigNumber = require('bignumber.js');

const num1 = new BigNumber('12345678901234567890');
const num2 = new BigNumber('98765432109876543210');

const sum = num1.plus(num2);
const difference = num1.minus(num2);
const product = num1.times(num2);
const quotient = num1.dividedBy(num2);

console.log(sum.toString());
console.log(difference.toString());
console.log(product.toString());
console.log(quotient.toString());
