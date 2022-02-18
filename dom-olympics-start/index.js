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
h1.style.position = 'absoltue';

var messages = document.getElementsByClassName('messages');

var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', clearFunction);
function clearFunction(){
    messages.backgroundColor = 'blue';
         console.log('worked')

}