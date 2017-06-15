/* eslint-disable no-console */

const Dog = require('./dog').default

const toby = new Dog('Toby')

console.log(toby.bark())
