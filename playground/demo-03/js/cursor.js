const circleElm = document.querySelector('#circle');

addEventListener('mousemove', (eventData)=>{
    circleElm.style.left = `${eventData.clientX - circleElm.offsetWidth / 2}px`;
    circleElm.style.top = `${eventData.clientY - circleElm.offsetHeight / 2}px`;
});

const colors = ['red', 'black', 'blue', 'yellow', 'lime', 'orange'];
let index = 0;

setInterval(()=> {
    circleElm.style.backgroundColor = colors[index++];
    if (index === colors.length) index = 0;
}, 250);
