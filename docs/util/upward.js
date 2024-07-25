// to do: insert CSS conditionally

let el = document.createElement('a')
    el.setAttribute('href', '#');
    el.classList.add('upward');
    el.textContent = 'Back to top';

let tgt = document.querySelector('#observablehq-main:has(h1:first-child + h2 > a[href="#post"])');
    
    tgt.insertAdjacentElement("beforeend", el);
    tgt.querySelector('h1:first-child').setAttribute('id','post');