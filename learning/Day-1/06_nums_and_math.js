const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(10));

const otherNumber = 123.8964
// console.log(otherNumber.toPrecision(4));

// to get no in indian number system 
const newNumber = 100000000000
// console.log(newNumber.toLocaleString()); // it gets in international number system
// console.log(newNumber.toLocaleString('en-IN')); // now you get in india number system

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // it gets upper round value output is : 5
// console.log(Math.floor(4.8)) // it gets lower round value output is : 4
// console.log(Math.min(3,4,8,6,0));
// console.log(Math.max(3,4,8,6,0));


console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random() * 10 + 1));
console.log(Math.floor((Math.random() * 10) + 1));

// If You want value come in some range then 

const min = 1111
const max = 9999
console.log(Math.floor((Math.random() * (max - min + 1) + min))); // learn it