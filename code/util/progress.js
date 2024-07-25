// to do: insert CSS conditionally

let bar = document.createElement('div');
  bar.setAttribute('id','progress');
  document.querySelector('#observablehq-main:has(h1:first-child + h2 > a[href="#post"]) h1 + h2').insertAdjacentElement("beforeend", bar);