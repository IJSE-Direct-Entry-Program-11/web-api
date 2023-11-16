// Element.className: string

/* You can gain fine-grained control over CSS Classes via classList  */
// Element.classList: DOMTokenList

// DOMTokenList is also an array-like object
// Array.from(DOMTokenList) => Array
// DOMTokenList.item(index):string  = DOMTokenList[index]:string
// DOMTokenList.contains('class(es)'):boolean
// DOMTokenList.add('class(es)')
// DOMTokenList.remove('class(es)')
// DOMTokenList.replace('old class(es)', 'new class(es)')
// DOMTokenList.toggle('class(es)')
// DOMTokenList.forEach((c) => {});

const h2Elm = document.querySelector('h2');
console.log(h2Elm.className);
// h2Elm.className = 'abc';

console.log(h2Elm.classList.contains('abc'));
console.log(h2Elm.classList.contains('edf'));
console.log(h2Elm.classList.contains('mno'));

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const h3Elm = document.querySelector('h3');

btn1.addEventListener('click', () => {
    if (!h3Elm.classList.contains('abc')) {
        h3Elm.classList.add('abc');
    } else {
        h3Elm.classList.remove('abc');
    }
});

btn2.addEventListener('click', () => {
    h3Elm.classList.toggle('edf');
    // if (!h3Elm.classList.contains('edf')) {
    //     h3Elm.classList.add('edf');
    // } else {
    //     h3Elm.classList.remove('edf');
    // }
});