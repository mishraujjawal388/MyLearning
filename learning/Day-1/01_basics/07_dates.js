let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 04, 12) // Date(year, month, days)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 04, 12, 5, 3, 42)
// let myCreatedDate = new Date("2023-04-18")
let myCreatedDate = new Date("06-24-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
// Today date and time is : 
console.log(`Today Date :- ${myDate.getDate()} : 0${ myDate.getMonth() + 1} : ${myDate.getFullYear()} and Time is :- 0${myDate.getHours()}hr : ${myDate.getMinutes()}min : ${myDate.getSeconds()}sec`);``