var readlineSync = require('readline-sync')

let walkCounter = 10
let randomNumber3 = 0
let randomNumber4 = 0
let startStop = true


const name = readlineSync.question("Hello, what is your name?")
let instructions = readlineSync.keyIn("Hello " + name + " Press w to start walking, walk 10 times to win:")


while(walkCounter>0 && startStop === true){
    walkCounter--
    console.log("You must walk " + walkCounter + " more times...")

//Random Counter 3
function randomCounter3(){
    randomNumber3 =  Math.floor(Math.random() *4)
}
randomCounter3()
if(randomNumber3 === 3){
    console.log("worked3")
    startStop = false
//Random Counter 4
function randCounter4(){
    randomNumber4 = Math.floor(Math.random() *5)
}
randCounter4()
if(randomNumber4 === 4){
    console.log("worked4")
}
    }

    if(startStop === false){
        let instructions = readlineSync.keyIn("Press W to continue walking")
        if(instructions === "w"){
            startStop = true
        }
    }
    
        

}
if(walkCounter === 0){
    console.log("Congrats, you won!")
}
