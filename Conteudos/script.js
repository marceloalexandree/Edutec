const carrossel = document.querySelector(".slides")
const arrastar = (e) => {
    carrossel.scrollLeft = e.pageX
}
carrossel.addEventListener("mousemove", arrastar)