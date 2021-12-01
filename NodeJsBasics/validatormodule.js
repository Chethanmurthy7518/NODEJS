const validator = require('validator')

const isValid = validator.isEmail('arun@gmail.com')
console.log("Is email Valid",isValid);