const validator = require('validator')
console.log(validator.isEmail('shondh.tara94@gmail.com'))
console.log(validator.isEmail('@gmail.com'))


const gN = require('./notes.js')
const name = gN()
console.log(name)

// const add = require('./utils.js')
// const sum = add(4, 5)
// console.log(sum)
