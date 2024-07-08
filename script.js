let text = document.getElementById('text');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let mountain3 = document.getElementById('mountain3');
let sun = document.getElementByIdById('sun');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    mountain1.style.left = value * -1.5 + 'px';
    mountain2.style.left = value * 1.5 + 'px';
    mountain3.style.top = value * 1.5 + 'px';
    sun.style.top = value * 1.5 + 'px';
});