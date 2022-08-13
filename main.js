'use strict'
window.addEventListener('load', () => {
    // content_inserter
    const inserter = document.querySelector('.content_inserter');
    const inserter_text_adder = document.querySelector('#text_input')
    const inserter_text_submit = document.querySelector('#submit')

    // content
    const addedContent = document.querySelector('.kontent')
    const addedText = document.querySelector('#text')
    const addedEdit = document.querySelector('.edit')
    const addedDelete = document.querySelector('.delete')


    inserter_text_submit.addEventListener('click', (e) => {
        const content = inserter_text_adder.value;
        e.preventDefault();
        if (!content) {
            console.log('Enter Something')
        }
else{
            console.log('helljo');
            const theContent = document.createElement('div')
            theContent.classList.add('content')

            const the_ultimate_text = document.createElement('div')
            the_ultimate_text.setAttribute('id','text')
            the_ultimate_text.innerText = content;

            theContent.appendChild(the_ultimate_text)
            addedContent.appendChild(theContent)}
            inserter_text_adder.value ='';
            
    })
})
// let colorValue = 0;
// setInterval(() => {
//     let lelo = document.querySelector('.content_inserter');
//     let telo = document.querySelector('.content');
//     if(colorValue<=360){
//         colorValue++
//         lelo.style.background = `hsl(${colorValue},100%,57%)`
//         telo.style.background = `hsl(${colorValue},100%,57%)`
//         console.log(colorValue);
//         if (colorValue>=360) {
//             colorValue = 0
//         }
//     }
// }, 30);
    