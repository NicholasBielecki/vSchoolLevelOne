var readlineSync = require('readline-sync');

var isAlive = true

let hasKey = false

var name = readlineSync.question("Hello, what is your name?");
console.log(`Welcome ${name} to my escape room`)



if(choice = "2"){
    isAlive === false
    console.log('it worked')
    console.log(isAlive)
}
if (isAlive = false){
    console.log('you died')
}




var choice = readlineSync.question("You awake in a dark room and can't remember what happend. You have three choices 1: Open the door 2: Put your hand in the hole 3: Search the desk")