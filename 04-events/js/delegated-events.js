// document.querySelectorAll("tbody tr").forEach(function(row){
//     row.addEventListener('click', function(){
//         row.focus();
//     });
// });

/* 
    e.stopPropagation()
    e.stopImmediatePropagation()
    e.preventDefault()
*/

// document.querySelectorAll("tbody tr").forEach(row => {
//     row.tabIndex = 0;
//     row.addEventListener('click', (e)=> {
//         // e.stopPropagation();
//         e.stopImmediatePropagation();
//         alert("Row Clicked 1");
//     });
//     row.addEventListener('click', (e) => {
//         alert("Row Clicked 2")
//     });
//     // Function References
//     // row.addEventListener('click', row.focus);
// });

// document.body.addEventListener('click', ()=>{
//     alert("Body: Okay");
// });

// document.querySelector('a').addEventListener('click', (e)=>{
//     e.preventDefault();
// });

// e.target = this is whether actually event has been triggered
// e.currentTarget = tbody = this

// Element.tagName: string

document.querySelector('tbody').addEventListener('click', function(e){
    // console.log(this);
    const trElm = e.target.closest("tr");
    trElm.tabIndex = 0;
    if (e.target.tagName === 'BUTTON'){
        trElm.remove();
    }else{
        trElm.focus();
    }
});