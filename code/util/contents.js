let toggle = document.createElement('input');
let label = document.createElement('label');


toggle.setAttribute('type','checkbox');
toggle.setAttribute('id','toggle');
toggle.classList.add('unfolder');

label.setAttribute('for','toggle');
label.classList.add('toggle-label');

label.textContent = '≡';

document.querySelector('#observablehq-toc').insertAdjacentElement('afterbegin',label);
document.querySelector('#observablehq-toc').insertAdjacentElement('afterbegin',toggle);