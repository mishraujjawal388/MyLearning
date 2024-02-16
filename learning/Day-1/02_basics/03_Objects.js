// singleton
// when we declare objects by objects literals its not making by singleton but when we declare objects by constractore methodeit making by singleton
// objects create
// we make singleton by this methode


// Objects literals
const mysymbol = Symbol("key1");
const JsUser = {
    name: "ujjawal", //by default system takes name as string
    "fullName": "Ujjawal Mishra",
    [mysymbol]: "mykey1", // you can use symbols in square bracket and pass value
    age: 18,
    email: "ujjawal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullName"])
// console.log(JsUser[mysymbol]) // you can get symbol value using square bracket 
// console.table([JsUser.email, JsUser["email"],JsUser["fullName"],JsUser[mysymbol]])

JsUser.email = "ujjawal@mishra.com" //you can use = to overwrite value
// console.table([JsUser.email, JsUser["email"],JsUser["fullName"],JsUser[mysymbol]])

// you want to lock the value (not changeable) then you use Object.freeze methode

Object.freeze(JsUser)
JsUser.email = "ujjawal@tech.in" //its not printed or changed due to freeze property
// console.table([JsUser.email, JsUser["email"],JsUser["fullName"],JsUser[mysymbol]])

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// always use .(dot) methode to access value from objects