function anim() {

    //if (document.startViewTransition) {

        const button = document.querySelector('.button')

        button.addEventListener('click', () => {
          const els = Array.from(document.querySelectorAll('.el'))
        
          document.startViewTransition(() => {
            els[0].before(els[1])
          });
        })

    //}

}


const footer = `<script>${
    main.toString().replace("function anim() {",'').replace(/\}$/gm,'')
}</script>`

export default footer