var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var newArray = forception(people,alphabet)

function forception(first,second){
    let blankArray = []
    for(i=0;i<first.length;i++){
        blankArray.push(first[i])

        for(a=0;a<second.length;a++){
            blankArray.push(second[a])
        }
    }
    return blankArray
}




console.log(newArray)





