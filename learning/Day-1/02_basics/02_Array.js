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