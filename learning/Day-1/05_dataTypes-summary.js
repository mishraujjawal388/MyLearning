//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //use 'n' after no to represent bigint



// Reference (Non primitive)

// types : Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory and heap memory 
// in premitive stack memory is working
// and in non-premitive heap memory is used

let myYoutubeName = "hiteshchaudhary"
let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "ujjawal@upi" 
}
let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userTwo);