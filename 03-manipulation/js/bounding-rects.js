// Element.clientLeft:nuber (int)               // left-border-width in pixels
// Element.clientTop:number (int)               // top-border-width in pixels
// Element.clientWidth:number (int)
// Element.clientHeight:number (int)

// HTMLElement.offsetLeft:number (int)          // relative to parent element
// HTMLElement.offsetTop:number (int)           // relative to parent element
// HTMLElement.offsetWidth:number (int)
// HTMLElement.offsetHeight:number (int)

// Element.getBoundingClientRect():DOMRect      // relative to viewport

// Element.scrollLeft:number (int)              // realtive to scrollport
// Element.scrollTop:number  (int)              // realtive to scrollport
// Element.scrollWidth:number   (int)
// Element.scrollHeight:number  (int)

// Window.innerWidth
// Window.innerHeight
// Window.outerWidth
// Window.outerHeight

const innerElm = document.querySelector("#inner");
const outerElem = document.querySelector("#outer");
const rect = innerElm.getBoundingClientRect();

console.log('clientLeft=', innerElm.clientLeft);
console.log('clientTop=', innerElm.clientTop);

console.log('offsetParent=', innerElm.offsetParent);
console.log('offsetLeft=', innerElm.offsetLeft);
console.log('offsetTop=', innerElm.offsetTop);

console.log('left=', rect.left, rect.x);
console.log('top=', rect.top, rect.y);

setInterval(()=>{
    console.log('scrollLeft=', outerElem.scrollLeft);
    console.log('scrollTop=', outerElem.scrollTop);
}, 1000);