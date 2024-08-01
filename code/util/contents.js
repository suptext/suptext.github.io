
let toc = document.querySelector('#observablehq-toc');

let toggle = document.createElement('input');
let label = document.createElement('label');


toggle.setAttribute('type', 'checkbox');
toggle.setAttribute('id', 'toggle');
toggle.classList.add('unfolder');

label.setAttribute('for', 'toggle');
label.classList.add('toggle-label');

label.textContent = '≡';

toc.insertAdjacentElement('afterbegin', label);
toc.insertAdjacentElement('afterbegin', toggle);

document.querySelector('#observablehq-main > h2:first-of-type').insertAdjacentElement("afterbegin", toc);
toc.classList.add('width-adjust')

window.addEventListener('click', function (event) {
    var target = event.target || event.srcElement;
    if (target.classList.contains('unfolder') || target.classList.contains('toggle-label')) {
      // e.preventDefault(); // Prevent the default action (navigation)
      // var href = target.getAttribute('href');
    } else {
        toggle.checked = false;

    }
}, false);