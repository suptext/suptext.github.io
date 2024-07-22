import {html} from "npm:htl";

function count(selector) {

    return html`<code>${[...document.querySelectorAll(selector)]
        .map(e => e.textContent)
        .join(' ').replaceAll(/[^A-Za-z0-9\s]+/g, '')
        .split(' ').length} words</code>`
}

export default count;