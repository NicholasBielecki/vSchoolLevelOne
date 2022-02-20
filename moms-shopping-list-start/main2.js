var inputForm = document.form1



form1.addEventListener("submit", function(event){
        event.preventDefault()
    var typedItem = document.form1.inputBox.value
    let newItem = document.createElement("li")
    let ul = document.getElementById('list')
        newItem.textContent = typedItem
        ul.append(newItem)
    
    
})

