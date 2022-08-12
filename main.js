'use strict'
// window.addEventListener('load', () => {
//     //content_inserter
//     const inserter = document.querySelector('.content_inserter');
//     const inserter_text_adder = document.querySelector('#text_input')
//     const inserter_text_submit = document.querySelector('#submit')

//     // content
//     const addedContent = document.querySelector('.content')
//     const addedText = document.querySelector('#text')
//     const addedEdit = document.querySelector('.edit')
//     const addedDelete = document.querySelector('.delete')


//     inserter_text_submit.addEventListener('click', (e) => {
//         const content = inserter.value;
//         e.preventDefault();
//         if (content == false) {
//             console.log('Enter Something')
//         }
//         else {
//             console.log('very good you wrote something')
//         }
//     })
// })
let colorValue = 0;
setInterval(() => {
    let lelo = document.querySelector('.content_inserter');
    let telo = document.querySelector('.content');
    if(colorValue<=360){
        colorValue++
        lelo.style.background = `hsl(${colorValue},100%,57%)`
        telo.style.background = `hsl(${colorValue},100%,57%)`
        console.log(colorValue);
        if (colorValue>=360) {
            colorValue = 0
        }
    }
}, 30);
    