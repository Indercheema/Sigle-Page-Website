'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

    Basic calculation
*/
// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
const model = select('.banner-section');
const btn = select('.more');
const text = select('.text2');

let n = 0;
const content = ['web designer based in Winnipeg' , 'Passionate developer focused creating new designs' , 'focused developer to learn new technology' , 'web designer based in Winnipeg'];

 function lets() {
    model.classList.add('is-visible');
}


function lets2() {
    btn.classList.add('is-visible');
}

window.addEventListener('load' , () => {
    lets();
    lets2();
});





 onEvent('click' , btn, function() {
    btn.innerText = (n === 2) ? 'AGAIN?' : 'MORE';

    if ( n === 2) {
        text.innerHTML = content[n = 0];
        return;
    }
    text.innerHTML = content[++n];
    });

onEvent('load' , showModel, function() {
    model.classList.add('is-visible');
});




onEvent('load' , showModel, function() {
    btn.classList.add('is-visible');
});




