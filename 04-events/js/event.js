function handler1(){
    alert('okay1');
}

function handler2(){
    alert('okay2');
}

const btnElm = document.querySelector("#btn");

// We bind an event handler's memory location to a property (onclick) here
btnElm.onclick = handler1;
btnElm.onclick = function(){
    alert("another way")
};
btnElm.onclick = ()=>{alert("via lambda")};

// btnElm.addEventListener('click', handler1);
// btnElm.addEventListener('click', function(){
//     alert("another way")
// });
// btnElm.addEventListener('click', ()=>{alert("via lambda")});