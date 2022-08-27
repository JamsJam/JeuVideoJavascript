let gridArea = document.querySelector('.gameGrid')
function slideGauche() {

    gridArea.style.transform = "translatex(-600)";
}



document.querySelector('#trigger1').addEventListener('click',() => {
    slideGauche()
})


document.querySelector('#trigger2').addEventListener('click',() => {
    slideGauche()
})


document.querySelector('#trigger3').addEventListener('click',() => {
    slideGauche()
})