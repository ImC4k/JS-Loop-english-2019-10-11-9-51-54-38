const arrLength = 20;
var a = [...Array(arrLength + 1).keys()];
a.forEach(item => (item % 2) == 0? console.log(`${item} is even number.`) : console.log(`${item} is odd number.`));