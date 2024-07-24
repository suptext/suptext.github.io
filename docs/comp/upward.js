let el = document.createElement('a')
    el.setAttribute('href', '#');
    el.classList.add('upward');
    el.textContent = 'Back to top';
    
document.querySelector('#observablehq-main:has(h1:first-child + h2 > a[href="#post"])').insertAdjacentElement("beforeend", el);