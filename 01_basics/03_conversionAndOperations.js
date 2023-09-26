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