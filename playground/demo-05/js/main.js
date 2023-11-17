const divElm = document.createElement('div');
divElm.style.width = '130px';
divElm.style.height = '150px';
// divElm.style.backgroundColor = 'red';
divElm.style.position = 'absolute';
divElm.style.backgroundSize = 'cover';
divElm.style.top = `${innerHeight - divElm.offsetHeight - 150}px`;

document.body.append(divElm);

let run = false;
let dx = 0;

addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowRight'){
        run = true;
        dx = 10;
        divElm.style.transform = 'rotateY(0deg)';
    }else if (e.key === 'ArrowLeft'){
        run = true;
        dx = -10;
        divElm.style.transform = 'rotateY(180deg)';
    }
});

addEventListener('keyup', (e)=>{
    if (e.key === 'ArrowRight' || 
        e.key === 'ArrowLeft') {
            run = false;
            dx = 0;
    }
});

function handlePlayerMovements(){
    if (run){
        divElm.style.left = `${divElm.offsetLeft + dx}px`;
    }
}

let index = 1;
function renderCharacter(){
    if (run){
        if (index >= 11) index = 1;
        divElm.style.backgroundImage = 
            `url('img/character/Walk (${index++}).png')`;
    }else{
        if (index >= 16) index = 1;
        divElm.style.backgroundImage = 
            `url('img/character/Idle (${index++}).png')`;
    }
}

setInterval(renderCharacter, 1000 / 21); // fps
setInterval(handlePlayerMovements, 50);