// what is function
// functions ka sidha matlab hai jo bhi aapne code likha hai usko ek package me band kar diya hai aur aap uss package ka jaha chahe waha utha ke usko copies le kar ja sakte hai usko jitne bar aap use karna chahe aap use kar sakte hai
    // console.log("U");
    // console.log("j");
    // console.log("j");
    // console.log("a");
    // console.log("w");
    // console.log("a");
    // console.log("l");

// jaise suppose kijiye aapko ye code run karana hai 10 bar to aapko 10 jagah same code likhana padega toh aap isko agar functions ke andar rakh denge and uske name ko use kar ke aap usko 10 jagah excute kar sakte hai matlab ek jagah aapne code likha and uske raference ko use kar ke aap usko jitne bar chahe jaha chahe waha excute kar sakte hai 


// how we write functions

// first write function it is a keyword and and write name of function you can give any name using camel case property after that you use parenthesis () and then scope {} - this is called scope and then you write your code in this scope like

function sayMyName() {
    console.log("U");
    console.log("j");
    console.log("j");
    console.log("a");
    console.log("w");
    console.log("a");
    console.log("l");
}

// aap aap usko excute karna chahate hai toh aap simple funktion ka name and paranthesis likhenge aur wo excute ho jayega like

// sayMyName() // at this place your function name is called raference and when you use paranthesis it excute your code (sayMyName is reference and sayMyName() is excution )

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers() //output - NaN (because aapne koi number hi nahi diya hai)
// addTwoNumbers(3,4) //output - 7 (because you pass 3 and 4 means value of number1 is 3 and value of number2 is 4), this (3,4) is called argument

// addTwoNumbers(3, "4") //output is 34 because 4 is string we already talk in data types

// one more thing when you write function and pass value in paranthesis like function addTwoNumbers(number1, number2) this number1 and number2 is called parameteres
// but when you excute addTwoNumbers(3,4) and pass some value in paranthesis the passing value is called argumentes

// const result = addTwoNumbers(3,5)

// console.log(result); // its output is undefined because your return value is different

// so you write your code with this methode to get return

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    //when you write code after return its not print because return ke bad koi v code excute nahi hota hai so aap return ke bad koi v value nahi pass karenge
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result : ", result); // now you your value
// output - Result :  8 

function loginUserMessage(username){
    return `${username} Just login`
}

// loginUserMessage("Ujjawal") // now your output is not showing because aap phir wahi galti kar rhe hai aapne print ke liye bola hi nahi so aap niche wale tarike se usko print karwa sakte hai

// console.log(loginUserMessage("Ujjawal"));
// when you excute it without argument then its output is undefined qki aapne koi value pass hi nahi kiya hai

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username"); // output - Please enter your username but it also excute below code so we give return qki aage Hamne padha hai ki return ke bad koi v code excute nahi hita hai
//         return
//     }
//     return `${username} Just login`
// }
// console.log(loginUserMessage());

// you can also excute is by this methode
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username"); // output - Please enter your username but it also excute below code so we give return qki aage Hamne padha hai ki return ke bad koi v code excute nahi hita hai
        return
    }
    return `${username} Just login`
}
// console.log(loginUserMessage());
console.log(loginUserMessage("Ujjawal"));