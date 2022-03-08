var numbers = [1,2,3,4,5,6,7,8,9]
const fruit = ["banana", "orange", "apple", "kiwi"]
var addedArray = []

/*for(i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
*/

 /*for(i=numbers.length; i<= numbers.length; i-- ){
    if(i===0){
        break;
    }
    console.log(i)
}*/

/*for(i=0; i<fruit.length; i++){
    console.log(fruit[i])
}*/

/*for(i=0; i<=9; i++){
    addedArray.push(i)    
}
console.log(addedArray)*/

/*for(i=0;i<=100;i++){
    if(i % 2 === 0){
        console.log(i)
    }
}*/

/*const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newFruitArray = []
for(i=0; i<fruit2.length; i++){
if(i % 2 === 0){
    newFruitArray.push(fruit2[i])
}
}
console.log(newFruitArray)*/

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
 
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  
/*for(i=0;i<peopleArray.length;i++){
    console.log(peopleArray[i].name)
}*/

/*var newNameArray = []
var newObjectArray = []
for(i=0;i<peopleArray.length;i++){
    newNameArray.push(peopleArray[i].name)
    newObjectArray.push(peopleArray[i].occupation)
}
console.log(newNameArray, newObjectArray)*/

/*var newNameArray = []
var newObjectArray = []
for(i=0;i<peopleArray.length;i++){
    if(i % 2 === 0){
        newNameArray.push(peopleArray[i].name)
        newObjectArray.push(peopleArray[i].occupation)
    }    
}
console.log(newNameArray, newObjectArray)*/


// var newArray = []
// for(i=0;i<3;i++){
//     newArray.push([0,0,0])
//  }
// console.log(newArray)

// var newArray = []
// for(i=0;i<3;i++){
//     newArray.push([])

//     for(a=0; a<3; a++){
// newArray[i].push(i)
//     }
//  }
// console.log(newArray)

var newArray = []
for(i=0;i<3;i++){
    newArray.push([])

    for(a=0; a<3; a++){
newArray[i].push(a)
    }
 }
console.log(newArray)