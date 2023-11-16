const h1Elm = document.querySelector('h1');

function handleH1ElmClick(){
    console.log(this);
}

// h1Elm.addEventListener('click', handleH1ElmClick);
h1Elm.addEventListener('click', function(){
    console.log(this);
});

// h1Elm.removeEventListener('click', handleH1ElmClick);

// h1Elm.addEventListener('click', function(){ alert('okay 2')});
// h1Elm.addEventListener('click', function(){ alert('okay 3')});
// h1Elm.removeEventListener('click', handleH1ElmClick);

// HTMLElement.tabIndex:number
document.querySelectorAll("tbody tr").forEach(r => r.tabIndex = 0);

// HTMLElement.click()
// HTMLElement.focus()
// HTMLElement.blur()
// HTMLElement.select()

document.querySelectorAll("tbody tr").forEach(r => r.addEventListener('click', ()=>{
    r.focus();
}));

const inputElm = document.querySelector("input");
const btnElem = document.querySelector("button");
const labelElm = document.querySelector("label");

// HTMLInputElm.value:any
// HTMLInputElm.files:FileList  (type="file")
// HTMLInputElm.checked:boolean (type="radio", type="checkbox")
// HTMLInputElm.disabled:boolean

btnElem.addEventListener('click', ()=> {
    const text = inputElm.value.trim();
    if (text.length === 0) return;
    labelElm.innerText = `Output: ${text}`;
});

inputElm.addEventListener('input', ()=> {
    labelElm.innerText = `Output: ${inputElm.value}`;
});

/* 
    keyup, keydown works with any key
    keypress usually works with keys that we can type (a, b, c..., 1, 2, &, *, enter, del, [backspace])
*/
/*  You can access event meta data via event handlers' first parameter */
document.querySelectorAll("tbody tr").forEach(row => row.addEventListener('keypress', (e)=>{
    if (e.key === "Delete"){
        if (confirm("Are you sure to delete?")){
            row.remove();
        }
    }
}));