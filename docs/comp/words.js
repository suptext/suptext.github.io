function count(selector) {

    let el = document.createElement('code');
    el.textContent = `${[...document.querySelectorAll(selector)]
        .map(e => e.textContent)
        .join(' ').replaceAll(/[^A-Za-z0-9\s]+/g, '')
        .split(' ').length} words`

    return el 
}

Object.assign(window.util,{count})

//export default count;