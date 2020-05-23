const chalk = require('chalk')
const getNotes = require('./notes')

const msg1 = chalk.bold.green('success!')
const msg2 = chalk.underline.red('success!')

console.log(msg1 + ' ' + msg2)