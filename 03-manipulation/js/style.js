// HTMLElement.style:CSSStyleDeclaration
// Window.getComputeStyle(Element):CSSStyleDeclaration

const h1Elm = document.querySelector('h1');
// These styles are applies as inline-styles
h1Elm.style.textAlign = 'right';
h1Elm.style.fontSize = '2.5rem';
// h1Elm.style.backgroundColor = 'limegreen';

// We can only retrive inline-styles
console.log(h1Elm.style.textAlign);
console.log(h1Elm.style.fontSize);
// console.log(h1Elm.style.backgroundColor);

const styles = /* window = this = globalThis */ getComputedStyle(h1Elm);
console.log(styles.backgroundColor);
console.log(styles.padding);