//KNOWN BUGS 1. Sometimes player health and enemy health both hit 0 at same time. This results in console logging that you killed it then died. This is due to the while loop having to make a complete cycle. 

var readlineSync = require('readline-sync')
//walking
let walkCounter = 40
let randomNumber3 = 0
let randomNumber4 = 0
let startStop = true
//game stuff
let enemies = ["COVID VIRUS", "U.S Dollar Inflation", "Vladimir Putin"]
let playerHealth = 5
let isALIVE = true
let playerInventory = []


const name = readlineSync.question("Hello, what is your name?")
let instructions = readlineSync.keyIn("Hello " + name + " Press w to start walking, walk 10 times to win:")


while(walkCounter>0 && startStop === true && isALIVE === true ){
    walkCounter--
    console.log("You must walk " + walkCounter + " more times...")    

//Random Counter 3
function randomCounter3(){
    randomNumber3 =  Math.floor(Math.random() *4)
}
randomCounter3()
if(randomNumber3 === 3){    
    startStop = false
    beingAttacked = true

while(beingAttacked === true && isALIVE === true){
    let enemy = enemies[Math.floor(Math.random() *3)]
    let enemyHealth = 2    
    let warning = readlineSync.question("You are attacked by a wild " + enemy +" You can either RUN or ATTACK:")
        //run
            if(warning === "RUN"){                
                let runChance = 0 + Math.floor(Math.random() *2)
                if(runChance === 0){
                console.log("You escaped")
                beingAttacked = false
                 }
        //failed run         
                 if(runChance===1){
                     playerHealth--
                     console.log("You did not escape. You lost one health state and have:" + playerHealth + " health. You must now fight the wild " + enemy )
                     if(playerHealth <=0){
                         beingAttacked=false
                         isALIVE=false
                         console.log("You died")
                     }

                        while(playerHealth>0 && enemyHealth>0){
                             playerHealth -= Math.floor(Math.random() *3)
                             enemyHealth -= Math.floor(Math.random() *3)
                                 if(enemyHealth <= 0){
                                    playerInventory.push(1)
                                    console.log("You killed it and now have:" + playerHealth + " health and have been awarded a potion. You now have" + playerInventory.length + " potions")                                     
                                     beingAttacked = false
                                 }
                                 if(playerHealth <= 0){
                                     console.log("This is a cool death message to let you know you died")
                                    isALIVE=false
                                     
                                 }
                         }
                       
                     
                    }      

        }
        //attack
                 if(warning === "ATTACK"){                     
                   while(playerHealth>0 && enemyHealth>0){
                        playerHealth -= Math.floor(Math.random() *3)
                        enemyHealth -= Math.floor(Math.random() *3)
                            if(enemyHealth <= 0){
                                playerInventory.push(1)
                                console.log("You killed it and now have:" + playerHealth + " health and have been awarded a potion. You now have" + playerInventory.length + " potions")
                                beingAttacked = false
                            }
                            if(playerHealth <= 0){
                                console.log("This is a cool death message to let you know you died")
                                isALIVE=false
                               
                            }
                    }
        }          
                
}
//potion time
    if(startStop === false && isALIVE === true){
        let instructions = readlineSync.keyIn("Press w to continue walking or press p to use a potion and restore 1 health. You have" + playerInventory.length + " potions left")
        if(instructions === "w"){
            startStop = true
        }
        if(instructions === "p"){
            if(playerInventory<=0){
                console.log("You dont have anymore potions and must continue walking")
                startStop=true
            }
            else{
                playerInventory.pop()
                playerHealth ++
                console.log("Your health is now " + playerHealth + " and you have " + playerInventory + " potions left")
                startStop=true
            }
        }
    }
    
}
if(walkCounter === 0){
    console.log("Congrats" + name + "you won!")
}

}

