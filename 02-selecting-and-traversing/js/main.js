// =============================================================
//  SELECTING
// =============================================================

// document.querySelector('css selector'): Element
// document.querySelectorAll('css selector'): NodeList
// Element.querySelector('css selector'): Element
// Element.querySelectorAll('css selector'): NodeList

// document.getElementById('id'): Element

// document.getElementsByClassName('class name'): HTMLCollection
// Element.getElementsByClassName('class name'): HTMLCollection

// HTMLCollection is an array-like object
// elms[0] == elms.item(0)
// Array.from(HTMLCollection) => Array

// NodeList is an array-like object
// NodeList.keys(): Iteartor
// NodeList.values(): Iterator
// NodeList.entries(): Iterator (Key/Value)
// NodeList.forEach(e => {})
// nodes[0] = nodes.item(0)
// Array.from(NodeList) => Array

// =============================================================

// const h1Elm = document.querySelector('h1');
// console.log(h1Elm);

// const spanElm = document.querySelector('span');
// console.log(spanElm);

// const spanNodeList = document.querySelectorAll('span');
// spanNodeList.forEach(s => console.log(s));

// const liElm2 = document.querySelectorAll('li')[1];
// console.log(liElm2);

// const divElm = document.querySelector('div#container');
// const pElm = divElm.querySelector('p');
// console.log(pElm);

// const liElm = document.querySelectorAll("ul")[1].querySelector('li');
// const liElm = document.querySelector("body > ul > li");
// console.log(liElm);

// const divElm = document.getElementById('container');
// console.log(divElm);

// const firstElm = document.getElementsByClassName('abc')[0];
// firstElm.style.backgroundColor = 'yellow';

// const elms = document.getElementsByClassName('abc');
// for (const elm of elms){
//     elm.style.backgroundColor = 'yellow';
// }

// =============================================================
//  TRAVERSING
// =============================================================

// Element.closest('css selector'): Element
// Node.parentElement: Element

// Element.children: HTMLCollection
// Element.firstElementChild: Element
// Element.lastElementChild: Element
// Element.previousSibilingElement: Element
// Element.nextSibilingElement: Element

const pElm = document.querySelector("#container > p.abc");
// console.log(pElm);
// console.log(pElm.previousElementSibling);
// console.log(pElm.nextElementSibling);

// console.log(pElm.nextElementSibling.firstElementChild);
// console.log(pElm.nextElementSibling.lastElementChild);

// console.log(pElm.nextElementSibling.children[1]);

// pElm.closest("body").firstElementChild.style.backgroundColor = 'yellow';
// pElm.parentElement.parentElement.firstElementChild.style.backgroundColor = 'yellow';
// pElm.parentElement.previousElementSibling.previousElementSibling.style.backgroundColor = 'Yellow';
// pElm.closest("body").querySelector("h1").style.backgroundColor = 'yellow';

pElm.parentElement.nextElementSibling.nextElementSibling.lastElementChild
                                .style.border = '5px solid red';
pElm.closest("body").querySelector("body>ul>li.abc").style.border = '5px solid green';
pElm.closest("body").children[4].children[1].style.border = '5px solid blue';
