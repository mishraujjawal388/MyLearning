// const tinderUser = new Object() //this is a singleton object 
const tinderUser = {} //this is a non-singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// optional chaining - if fullname does not exist then we use ? after fullname is data is available then it run but not available in not run
// syntax - console.log(regularUser.fullname?.userfullname.firstname);
// if we not use optional chaining we need to give if else

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// output : - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// it makes object ke andar objects
// we use spread operator intead of above methode

// we also use assign methode to merge our objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Determines whether an object has a property with the specified name.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Read and analyse prototype of objects

// Destructuring objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // you can give short name of your large name by this methode

// console.log(courseInstructor);
// console.log(instructor);

// this is a destructuring methode used in react 
// const navbar = ({company}) => {
    
// }

// navbar(company = "ujjawal")

// this is JSON

// {
//     "name": "Ujjawal",
//     "role": "web designer",
//     "price": "4lakh"
// }

// bahut samay api Array ke rup me milta hai isame bahut sare objects hote hai wo hame aise dikhata hai

// [
//     {},
//     {},
//     {}
// ]

// what is API ?
// jab bhi aapko apna kam kisi aur pe dal dete hai use api kahate hai

// api kuchh nahi hai aapko backend se koi value aati hai usko aap kaise likhate hai usi ko api kahate hai pahale ise xml me likhate ye bahut complex hota tha but ab ise json me likhate hai