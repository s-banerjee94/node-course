const validator = require('validator')

//Email validation
console.log('This Email is valid. ' + validator.isEmail('shondh.tara94@gmail.com'))
console.log('This Email is valid. ' + validator.isEmail('@gmail.com'))

//URL validation
console.log('This URL is valid. ' + validator.isURL('www.google.com'))
console.log('This URL is valid. ' + validator.isURL('google.com'))
console.log('This URL is valid. ' + validator.isURL('https:google.com'))

//Mobile number validation
console.log('This URL is valid. ' + validator.isMobilePhone('+918436381333', ['en-IN']))
console.log('This URL is valid. ' + validator.isMobilePhone('+91843638133', ['en-IN']))


//My own function eport TEST
const gN = require('./notes.js')
const name = gN()
console.log(name)

// const add = require('./utils.js')
// const sum = add(4, 5)
// console.log(sum)
