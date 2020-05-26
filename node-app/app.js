const chalk = require('chalk')
const getNotes = require('./notes')

//calling getNotes function from nodtes.js
const msgNote = getNotes()
console.log(msgNote)


//workig with chalk
const msg1 = chalk.bold.green('success!')
const msg2 = chalk.underline.red('success!')

console.log(msg1 + ' ' + msg2)


//working with comment line arguments
//The process object is a global that provides information about, and control over, the current Node.js process
//argv is argument vector, it will catch the argument which will be given in comment line
//In here we are picking the array index 2's value
console.log(process.argv[2])
//show all values
console.log(process.argv)