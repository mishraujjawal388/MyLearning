const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3]);

// let newArray = marvel_heros.concat(dc_heros)
// console.log(newArray);

// ++++++++++++++++++  spread operator ++++++++++++++++++++
let all_heroes = [...marvel_heros, ...dc_heros] // by spread methode methode we can add more array
console.log(all_heroes);
//and in concat we concat only 2 arrays

const another_array = [ 1, 2, 3, [4, 5, [ 6, 7, [ 8, 9 ] ] ] ]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ujjawal"))
console.log(Array.from("Ujjawal"))
console.log(Array.from({name: "hitesh"})) // Interesting

// if you want to make array with above .from methode you use key value like it make array of string or any other value to make array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// you also make array by above this methode