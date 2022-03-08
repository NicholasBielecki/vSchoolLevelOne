let numbers = [1,5,32,6,14]
let largestNumber = []
function largest (param1){
    for(i=0;i<param1.length; i++){
        
        if(param1[i] > largestNumber){
            largestNumber.splice(0,1,param1[i])
        }
    }
}
largest(numbers)
console.log(largestNumber[0])


let words = ["!;lj", "$AMC", "$GME", "#twitter"]
function moonGang (param1){
    for(i=0;i<param1.length;i++){
        if(param1[i].includes("$"))
        console.log(param1[i])
    }
}
moonGang(words)


function division (num1,num2){
    if(num1 % num2 ===0){
        console.log("true")
    }
    else{
        console.log("false")
    }
}

division(4,2)
division(5,3)