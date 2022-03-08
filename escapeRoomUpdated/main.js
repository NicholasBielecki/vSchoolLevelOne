var readlineSync = require('readline-sync')

let isAlive = true

let hasKey = false

var name = readlineSync.question("Hello, what is your name?")
console.log(`Welcome ${name} to my escape room`)





while(isAlive === true){
    var choice = readlineSync.question("You awake in a dark room and can't remember what happend. You have three choices 1: Open the door 2: Put your hand in the hole 3: Search the desk")
    if(choice == 1 && hasKey === false){
        console.log("You can't open the door without a key!")
    }
    else if(choice == 1 && hasKey === true){
        console.log("You opened the door and escaped!")
        isAlive = false
    }
      
     else if(choice == 2){
        console.log("You died")
        isAlive = false
    }
    else if (choice == 3){
        console.log("You found a key!")
            hasKey = true        
    }
   
}


