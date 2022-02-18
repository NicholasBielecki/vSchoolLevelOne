var square = document.getElementById("square");

window.addEventListener("keydown", checkKeyPressed)


function checkKeyPressed(key) {
    if (key.keyCode === "13") {
        alert("You pressed 'enter'.");
    }

    else if (key.keyCode === 66){
        square.style.backgroundColor = "blue";
    }

    else if (key.keyCode === 82){
        square.style.backgroundColor = "red";
    }

    else if (key.keyCode === 89){
        square.style.backgroundColor = "yellow";
    }

    else if (key.keyCode === 71){
        square.style.backgroundColor = "green";
    }

    else if (key.keyCode === 79){
        square.style.backgroundColor = "orange";
    }
}

square.addEventListener("mouseover", function1);
function function1 () {
    square.style.backgroundColor = "blue";
    console.log('hi')
} 

square.addEventListener("mousedown", function2);
function function2 () {
    square.style.backgroundColor = "red";
    console.log("worked")
}


square.addEventListener('mouseup', function3)
function function3 () {
    square.style.backgroundColor = "yellow";
}

square.addEventListener('dblclick', function4)
function function4 (){
    square.style.backgroundColor = 'green';
}

square.addEventListener('mouseout', function5);
function function5 (){
    square.style.backgroundColor = 'orange';
}