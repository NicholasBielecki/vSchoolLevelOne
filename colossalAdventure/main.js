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
                                     console.log("You killed it and now have:" + playerHealth + " health")
                                     beingAttacked = false
                                 }
                                 if(playerHealth <= 0){
                                     console.log("You died")
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
                                console.log("You killed it and now have:" + playerHealth + " health")
                                beingAttacked = false
                            }
                            if(playerHealth <= 0){
                                console.log("You died")
                                isALIVE=false
                               
                            }
                    }
        }          
                
}

    if(startStop === false && isALIVE === true){
        let instructions = readlineSync.keyIn("Press w to continue walking")
        if(instructions === "w"){
            startStop = true
        }
    }
    
}
if(walkCounter === 0){
    console.log("Congrats, you won!")
}

}

