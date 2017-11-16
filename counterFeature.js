var para = document.querySelector('p');

var btn = document.querySelector('button');
var counter = 0;

btn.addEventListener('click', increaseCounter);

function increaseCounter(){
    counter++;
    para.textContent = counter;
}