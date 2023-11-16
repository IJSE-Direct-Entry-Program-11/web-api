
// document.createElement('tagname'): Element
// Node.cloneNode(deep:true): Node
// Element.before(element(s))
// Element.after(element(s))
// Element.append(element(s))
// Element.prepend(element(s))
// Element.replaceWith(element(s))
// Element.remove()

const h1Elm = document.createElement('h1');
h1Elm.innerText = 'I am being just generated';

const ulElm = document.querySelector('ul');
ulElm.replaceWith(h1Elm);

// const liElm = document.createElement('li');
// liElm.innerText = "This is a dynamically generated list item";
// const clonedLiElm = liElm.cloneNode(true);

// const ulElm = document.querySelector("ul");
// ulElm.append(liElm);
// ulElm.prepend(liElm);

// const liElm2 = ulElm.querySelector("li:nth-child(2)");
// liElm2.before(liElm, clonedLiElm);
// liElm2.after(liElm);
