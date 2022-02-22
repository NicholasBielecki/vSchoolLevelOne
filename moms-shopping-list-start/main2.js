var inputForm = document.form1


form1.addEventListener("submit", function(event){
        event.preventDefault()
    var typedItem = document.form1.inputBox.value
    let newItem = document.createElement("li")
    let ul = document.getElementById('list')
    let createEdit = document.createElement('button')
    let createRemove = document.createElement('button')
        
        createEdit.textContent = "edit"
        createEdit.className = "editClass"
        createEdit.addEventListener("click", editFunction);
        function editFunction(event){
            if (event.target.textContent === "edit"){
                let editValue = document.createElement('input')
                editValue.type = 'text'
                editValue.id = 'inputBox2'
                createEdit.textContent = "save"
                createEdit.append(editValue)

            }
            else if(event.target.textContent === "save"){
                let editInput = document.getElementById('inputBox2').value
                console.log(editInput)
                createEdit.textContent = "edit"
            }               
            
        }
               

        createRemove.textContent = "remove"
        createRemove.className = "removeClass"
        createRemove.addEventListener('click', function(event){            
            event.target.parentElement.remove()
        })

        newItem.textContent = typedItem
        newItem.className = "classList"


        ul.append(newItem)
        newItem.append(createEdit)
        newItem.append(createRemove)
})


