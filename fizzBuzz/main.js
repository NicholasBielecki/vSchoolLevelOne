let numbers = []
let counter = {fizz: 0, buzz:0, fizzbuzz:0 }

fizz = function(){
    for(i=1;i<100;i++){
        numbers.push(i)

       if(i % 3 === 0){
            numbers.splice(i,1,"fizz")
            counter.fizz++
       }

       if(i % 5 ===0){
           numbers.splice(i,1,"buzz")
            counter.buzz++
       }

       if(i % 3 === 0 && i % 5 === 0){
           numbers.splice(i,1,"fizzbuzz")
           counter.fizzbuzz++
       }
    }
}
fizz()
console.log(numbers,counter)