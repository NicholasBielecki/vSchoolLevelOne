var span2 = document.createElement('span')
span2.textContent = 'wrote the JAVASCRIPT';
span2.style.fontSize = '20px';
span2.style.color = 'blue';
document.body.prepend(span2);


var span1 = document.createElement('span')
span1.textContent = 'Nicholas Bielecki ';
span1.style.color = 'green';
span1.style.fontSize = '20px';
document.body.prepend(span1);


var h1 = document.createElement('h1')
h1.textContent = 'JAVASCRIPT MADE THIS!!!!';
document.body.prepend(h1);
h1.style.backgroundColor = "red";
h1.style.textAlign = 'center';

var clearButton = document.getElementById('clear-button');
var messageLeft = document.getElementsByClassName("message left");
var messageRight = document.getElementsByClassName('message right');
var mainDiv = document.getElementById('main');

clearButton.addEventListener('click', removeFunction);

function removeFunction(){
    for(i=0; i < messageLeft.length; i++){
        messageLeft[i].textContent = "";
        messageLeft[i].style.backgroundColor = 'white';
    }
    for (i=0; i< messageRight.length; i++){
        messageRight[i].textContent = "";
        messageRight[i].style.backgroundColor = "white";
    }
    

}


var dropDown = document.getElementById("theme-drop-down");
dropDown.addEventListener('change', themeFunction);
function themeFunction(){
    optionValue = document.getElementById('theme-drop-down').value;
    
    if(optionValue === "theme-two"){
        for(i=0; i < messageLeft.length; i++){
        messageLeft[i].style.backgroundColor = 'red'
        }
        for(i=0; i < messageRight.length; i++){
            messageRight[i].style.backgroundColor = 'black'
            messageRight[i].style.color = 'yellow'
            }
            }
    else if (optionValue === "theme-one"){
        
            for(i=0; i < messageLeft.length; i++){
            messageLeft[i].style.backgroundColor = 'blue'
            }
            for(i=0; i < messageRight.length; i++){
                messageRight[i].style.backgroundColor = 'brown'
                messageRight[i].style.color = 'black'
                }
           }
    
}


var sendButton = document.getElementById('sendButton');
var counter = 0;

sendButton.addEventListener('click', addLeftFunction);
function addLeftFunction(){
    
     counter ++;
    console.log(counter)
    if(counter % 2 === 0){
        let inputValue = document.getElementById('input').value;
        let newText = document.createElement('div');    
        newText.textContent = inputValue;
        newText.className = "message left";
        mainDiv.prepend(newText);      
          console.log(counter)
    }
    else{
        let inputValue = document.getElementById('input').value;
        let newText = document.createElement('div');    
        newText.textContent = inputValue;
        newText.className = "message right";
        mainDiv.prepend(newText);
        }
    }
