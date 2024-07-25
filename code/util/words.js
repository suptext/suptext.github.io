function count({include = 'p', exclude = ''} = {}) {

  let el = document.createElement("code");
  let keep = [...document.querySelectorAll(include)]
    .map((e) => e.textContent).join(" ")
    .replaceAll(/[^A-Za-z0-9\s]+/g, "")
    .split(" ").length;

  let drop = [...document.querySelectorAll(exclude)]
    .map((e) => e.textContent).join(" ")
    .replaceAll(/[^A-Za-z0-9\s]+/g, "")
    .split(" ").length;

  el.textContent = `${keep - drop} words`;

  return el;
}

let wordCount = count({
  include: 'p:has(> [href="#lead"]) ~ *', 
  exclude:':has(+ * > [href="#exit"]) ~ *'
})

document.querySelector('p:nth-child(3) > a[href="#count"]').replaceWith(wordCount)