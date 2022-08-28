let gridArea = document.querySelector('.gameGrid')




function slideGauche() {

    gridArea.style.transform = "translatex(-600px)";
}


function slideDroite() {

    gridArea.style.transform = "translatex(600px)";
}


function slideBas() {

    gridArea.style.transform = "translatey(600px)";
}


function slideHaut() {

    gridArea.style.transform = "translatey(-600px)";
}










// **************************************************************************Slide a Gauche
    document.querySelector('#trigger1').addEventListener('click',() => {
        slideGauche()
    })


    document.querySelector('#trigger2').addEventListener('click',() => {
        slideGauche()
    })


    document.querySelector('#trigger3').addEventListener('click',() => {
        slideGauche()
    })




// **************************************************************************Slide a droite
    document.querySelector('#trigger4').addEventListener('click',() => {
        slideBas()
    })


    document.querySelector('#trigger5').addEventListener('click',() => {
        slideBas()
    })


    document.querySelector('#trigger6').addEventListener('click',() => {
        slideBas()
    })



// **************************************************************************Slide en bas
    document.querySelector('#trigger7').addEventListener('click',() => {
        slideDroite()
    })


    document.querySelector('#trigger8').addEventListener('click',() => {
        slideDroite()
    })


    document.querySelector('#trigger9').addEventListener('click',() => {
        slideDroite()
    })




// **************************************************************************Slide en haut
    document.querySelector('#trigger10').addEventListener('click',() => {
        slideHaut()
    })


    document.querySelector('#trigger11').addEventListener('click',() => {
        slideHaut()
    })


    document.querySelector('#trigger12').addEventListener('click',() => {
        slideHaut()
})