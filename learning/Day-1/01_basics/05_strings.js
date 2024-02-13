const Name = "ujjawal"
const repoCount = 6

// console.log(name + repoCount);

// console.log(`hello my name is ${Name} and my repo count is ${repoCount}`); 

// const gameName = new String('ujjawal-game')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase(Name));
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('u'));

// const newString = gameName.substring(0,10)
// console.log(newString);

// const anotherString = gameName.slice(-4, 5)
// console.log(anotherString);

// const newStringone = "  ujjawal Mishra       "
// console.log(newStringone.trim())

// const url = "ujjawal@gmail.com/ujjawal20%data"
// console.log(url.replace('20%', "-"));


// ************ Practice **********

const gameName = 'ujjawal-game'

// console.log(gameName.anchor('game'));
// // Expected output: <a name="game">ujjawal-game</a> 
// console.log(gameName.anchor(''));
// // Expected output: <a name="">ujjawal-game</a>
// console.log(gameName.anchor());
// // Expected output: <a name="undefined">ujjawal-game</a>

const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 8;
// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 8 returns the character k"

// console.log(sentence.at('10'));
// Expected output: b

// console.log(sentence.big());
// Expected output: <big>The quick brown fox jumps over the lazy dog.</big>

// console.log(sentence.big('h3'));
// Expected output: <big>The quick brown fox jumps over the lazy dog.</big> (same output no change)

// console.log(sentence.blink());
// Expected output: <blink>The quick brown fox jumps over the lazy dog.</blink>

console.log(sentence.bold());
// Expected output: <b>The quick brown fox jumps over the lazy dog.</b>

console.log(`Charecter code - ${sentence.charCodeAt(index)} and Charecter is ${sentence.charAt(index)}`);

// read it : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt 