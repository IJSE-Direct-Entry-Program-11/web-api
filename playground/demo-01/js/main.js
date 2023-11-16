const h1Elm = document.querySelector('h1');
const btnStart = document.querySelector('#btn-start');
const btnEnd = document.querySelector('#btn-end');

let tmrId = 0;

const colors = ['red', 'green', 'orange', 'blue', 'black', 'yellow'];
let index = 0;

btnStart.addEventListener('click', ()=>{
    tmrId = setInterval(()=> {
        h1Elm.style.backgroundColor = colors[index++];
        if (index === colors.length) index = 0;
    }, 100);
});

btnEnd.addEventListener('click', ()=>{
    clearInterval(tmrId);
});

// setInterval(function(){
//     h1Elm.innerText += h1Elm.innerText;
// }, 5000);

// window.setTimeout(function(){
//     window.alert('ok');
// }, 2500);
