// document.write('Hi ');
// document.write('DEP');
// document.writeln('This should be in a new line');
// document.writeln('This should be in a new line');

// const bodyElm = document.querySelector('body');
// console.log(bodyElm);
// h1Elm.remove();

const btnElm = document.querySelector('#btn-1');
// btnElm.addEventListener('click', {
//     handleEvent(){
//         console.log("Who the heck clicked me?");
//     }
// });
btnElm.addEventListener('click', () => {
    const h1Elm = document.querySelector('h1');
    h1Elm.contentEditable = 'true';
    for(let i = 0; i < 50; i++){
        const clonedH1Elm = h1Elm.cloneNode(true);
        clonedH1Elm.innerText = `DOM API ${i+1}`;
        const bodyElm = document.body;
        bodyElm.appendChild(clonedH1Elm);
    }
});

const btnElm2 = document.querySelector('#btn-2');
btnElm2.addEventListener('click', ()=> {
    document.body.remove();
});