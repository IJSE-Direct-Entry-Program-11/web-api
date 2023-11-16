// HTMLElement.innerText:string
// Element.innerHTML:string
// Node.textContent:string

// Element.outerHTML:string
// HTMLElement.outerText:string

const h1Elm = document.querySelector('h1');
h1Elm.innerHTML = `<mark>DOM</mark> 
                    <!-- IJSE -->
                    <script>console.log('abc');</script>
                    <span style='display:none'>ABC</span> 
                    ${h1Elm.innerText}`;
console.log(h1Elm.innerText);
console.log(h1Elm.innerHTML);

const h2Elm = document.querySelector('h2');
console.log(h2Elm.innerText);
/* Setting innerText will remove all child elements inside the h2Elm */
h2Elm.innerText = "Hello InnerText!"; 

console.log("---------------");

console.log('innerHTML=', h1Elm.innerHTML);     // With markup
console.log('innerText=', h1Elm.innerText);     // Rendered text without markup
console.log('textContent=', h1Elm.textContent); // Whole text content without markup

console.log("---------------");

const h3Elm = document.querySelector('h3');
console.log(h3Elm.innerHTML);
console.log(h3Elm.outerHTML);
// h3Elm.outerHTML = '<mark>Test</mark>';

console.log("---------------");
console.log(h3Elm.innerText);
console.log(h3Elm.outerText);
h3Elm.outerText = 'ABC';