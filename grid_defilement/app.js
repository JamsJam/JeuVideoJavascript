let trig = document.querySelectorAll(".trigger")
console.log(trig)
trig[1].addEventListener('click',() => {
    document.querySelector('#tableau-curent').style.transform = "translateY(-700px)"
    document.querySelector('#tableau-curent').style.transition = "1s"
})