var button = document.getElementById("button");


button.addEventListener('click', myfunction);

function myfunction(){
    var input = document.getElementById("input").value;
    var element = document.createElement ("p");
    element.textContent = input;
    document.body.append(element)
    console.log("history")
    console.log(input)
}


