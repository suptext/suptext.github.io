let toggle = document.createElement('input');
let label = document.createElement('label');


toggle.setAttribute('type','checkbox');
toggle.setAttribute('id','toggle');
toggle.classList.add('unfolder');

label.setAttribute('for','toggle');
label.classList.add('toggle-label');

label.textContent = '≡';

let toc = document.querySelector('#observablehq-toc');
  
  toc.insertAdjacentElement('afterbegin',label);
  toc.insertAdjacentElement('afterbegin',toggle);

document.querySelector('#observablehq-main > h2:first-of-type').insertAdjacentElement("beforeend",toc);
