// capilizeAndLowercase("HelLo") // => "HELLOhello"

var hello = "hello"
var upperAndLowerCase = hello.toUpperCase() + hello.toLowerCase()
var oddString = "abcdefg"
console.log(upperAndLowerCase)


function midPoint(param1){
   return Math.floor(param1.length /2)
    
}
console.log(midPoint(hello))

function smice(param1){
   return param1.slice(0,midPoint(hello))

}
console.log(smice(hello))

function fanally(param1){
   var first = param1.slice(0, Math.floor(param1.length /2));
   var second = param1.slice(Math.floor(param1.length /2));
   return first.toUpperCase() + second.toLowerCase()
   
}
console.log(fanally(oddString))