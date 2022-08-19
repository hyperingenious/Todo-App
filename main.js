'use strict'
window.addEventListener('load', () => {
    // content_inserter
    const inserter_text_adder = document.querySelector('#text_input')
    const inserter_text_submit = document.querySelector('#submit')

    // content
    const addedContent = document.querySelector('.kontent')

    inserter_text_submit.addEventListener('click', (e) => {
        const content = inserter_text_adder.value;
        e.preventDefault();



        if (!content) {
            console.log('Enter Something')
        }
        else {
            console.log('helljo');
            const theContent = document.createElement('div')
            theContent.classList.add('content')

            const the_ultimate_text = document.createElement('input')
            the_ultimate_text.classList.add('text')
            the_ultimate_text.setAttribute('type', 'text')
            the_ultimate_text.setAttribute('readonly', 'readonly')

            the_ultimate_text.value = content;

            const the_edit = document.createElement('button')
            the_edit.classList.add('edit')
            the_edit.innerText = 'Edit'

            const the_delete = document.createElement('button')
            the_delete.classList.add('delete')
            the_delete.innerText = 'Delete'

            theContent.appendChild(the_ultimate_text)
            theContent.appendChild(the_edit)
            theContent.appendChild(the_delete)

            addedContent.appendChild(theContent)

            the_delete.addEventListener('click', () => {
                addedContent.removeChild(theContent)
            })

            the_edit.addEventListener('click', () => {
                if (the_edit.innerText == "Save") {
                    the_ultimate_text.setAttribute('readonly', 'readonly')
                    the_edit.innerText = 'Edit'
                }
                else if (the_edit.innerText == 'Edit') {
                        the_ultimate_text.removeAttribute('readonly')
                        the_ultimate_text.focus()
                        the_edit.innerText = "Save"
                }
            })



        }
        inserter_text_adder.value = '';
    })
})
/*
let colorValue = 0;
setInterval(() => {
    let lelo = document.querySelectorAll('.text');
    if(colorValue<=360){
        colorValue++;
lelo.forEach((e)=>{
    e.style.color = `hsl(${colorValue},100%,57%)`;
})
        // lelo[0].style.color = `hsl(${colorValue},100%,57%)`
      console.log(colorValue);
        if (colorValue>=360) {
            colorValue = 0
        }
    }
}, 30);
*/

let colorValue = 0;
setInterval(() => {
    let lelo = document.querySelector('.content_inserter');
    if(colorValue<=360){
        colorValue++;
        lelo.style.boxShadow = `hsl(${colorValue},100%,57%) 0px 0px 10px 3px`;
// lelo.forEach((e)=>{
// })
        // lelo[0].style.color = `hsl(${colorValue},100%,57%)`
      console.log(colorValue);
        if (colorValue>=360) {
            colorValue = 0
        }
    }
}, 30);

