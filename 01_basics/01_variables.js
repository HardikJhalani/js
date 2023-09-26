const accountId = 122321
let accountEmail = "hardik@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState // undefined

// accountId = 2 not allowed

accountEmail = 'hd@gmail.com'
accountPassword = 'huhsaisn'
accountCity = 'Ajmer'

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and funcitonal scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])