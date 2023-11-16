for(let i = 0; i < 30; i++){
    const divElm = document.createElement('div');
    divElm.className = 'box';

    document.body.append(divElm);

    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    divElm.style.backgroundColor = `rgb(${r},${g},${b})`;
    divElm.style.borderRadius = `${Math.random() * 50}%`;
    const size = 10 + (30 * Math.random());
    divElm.style.width = `${size}px`;
    divElm.style.height = `${size}px`;
    divElm.style.transform = `rotate(${Math.random() * 360}deg)`;

    divElm.style.left = `${innerWidth / 2 - divElm.offsetWidth / 2}px`;
    divElm.style.top = `${innerHeight / 2 - divElm.offsetHeight / 2}px`;

    let dy = (2 +  10 * Math.random()) * (Math.random() < 0.5 ? -1: 1);
    let dx = (2 + 10 * Math.random()) * (Math.random() < 0.5 ? -1: 1);

    setInterval(()=>{
        divElm.style.top = `${divElm.offsetTop + dy}px`;
        if (divElm.offsetTop <= 0) dy = -dy;
        if (divElm.offsetTop + divElm.offsetHeight >= innerHeight) dy = -dy;
        divElm.style.left = `${divElm.offsetLeft + dx}px`;
        if (divElm.offsetLeft <= 0) dx = -dx;
        if (divElm.offsetLeft + divElm.offsetWidth >= innerWidth) dx = -dx;    
    }, 60);
}