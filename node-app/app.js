const validator = require('validator')
console.log('This Email is valid. ' + validator.isEmail('shondh.tara94@gmail.com'))
console.log('This Email is valid. ' +validator.isEmail('@gmail.com'))

console.log('This URL is valid. ' +validator.isURL('www.google.com'))
console.log('This URL is valid. ' +validator.isURL('google.com'))
console.log('This URL is valid. ' +validator.isURL('https:google.com'))


const gN = require('./notes.js')
const name = gN()
console.log(name)

// const add = require('./utils.js')
// const sum = add(4, 5)
// console.log(sum)
