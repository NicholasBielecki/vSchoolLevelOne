var inputForm = document.form1
var counter = 1

form1.addEventListener("submit", function(event){
        event.preventDefault()
    var typedItem = document.form1.inputBox.value
    let newItem = document.createElement("li")
    let ul = document.getElementById('list')
    let createEdit = document.createElement('button')
    let createRemove = document.createElement('button')
        
        createEdit.textContent = "edit"
        createEdit.className = "editClass"
        createEdit.addEventListener("click", function(event){            
            counter ++;
            console.log(counter)
            if(counter % 2 ===0 ){
                createEdit.textContent = "save"
            }
            else{
                createEdit.textContent = "edit"
            }
            
                
        })
                
             

        createRemove.textContent = "remove"
        createRemove.className = "removeClass"
        createRemove.addEventListener('click', function(event){
            console.log("IT FUCKING WORKED BROTHER!!!")
            event.target.parentElement.remove()

        })

        newItem.textContent = typedItem
        newItem.className = "classList"


        ul.append(newItem)
        newItem.append(createEdit)
        newItem.append(createRemove)
})


