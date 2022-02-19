var readlineSync = require('readline-sync');

var door = 0;

var answer = readlineSync.question('You wake up and are locked in a room. You have three choices. 1: Try to open the door 2: Put your hand in a hole in the wall to find the key. 3:Search the desk for a key......Enter the number of your choice');


let isalive = true
let haskey = false

if (isalive = false){
    console.log('you died')
}

if(answer === "2"){
    isalive = false
}
else if(answer==="3"){
     console.log("You found the key");
     door ++ ;
     
    var answer2 = readlineSync.question("You found the Key! Would you like to open the door? Y or N:")
    }
else if(door === 0 & answer ==="1" ){
    console.log("door wont open without key")
}

if (answer2 ==='N'){
    console.log('You sat around and died in the room')
}
if (door ===1 && answer2 ==="Y"){
    console.log ('It worked! The door opened!')
}

