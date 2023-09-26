let score = "33a"

console.log(typeof score); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number

console.log(valueInNumber); // NaN

// "33" => 33
// "33a" => NaN
// true => 1, false => 0
// null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "" => false
// "Hardik" => true

// *********************************** Operations ************************************ //

let value = 10
let negVal = -value
console.log(negVal); // -10

let str1 = "Hardik"
let str2 = "Jhalani"

let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log(++gameCounter); // 101
console.log(gameCounter++); // 101
console.log(gameCounter); // 102