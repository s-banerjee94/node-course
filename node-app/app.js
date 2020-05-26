const chalk = require('chalk')
const getNotes = require('./notes')

//calling getNotes function from nodtes.js
const msgNote = getNotes()
console.log(msgNote)


//workig with chalk
const msg1 = chalk.bold.green('success!')
const msg2 = chalk.underline.red('success!')

console.log(msg1 + ' ' + msg2)
