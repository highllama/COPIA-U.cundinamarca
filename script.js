const Background = document.querySelector('.backgroundSlider');
const botonIzquierda = document.getElementById('botonIzquierdo')
const botonDerecha = document.getElementById('botonDerecho')
const stickyHeader = document.getElementById('stickyHeader')




window.addEventListener("DOMContentLoaded", () => {
  sliderImage.style.width = window.screen.availWidth + 'px'
  stickyHeader.style.width= window.screen.availWidth + 'px'
  console.log(window.screen.availWidth)
})





///////////// SLIDER BUTTONS /////////////////

botonIzquierda.addEventListener('click', () => {
  Background.scrollLeft -= Background.offsetWidth + 15 ;

})
botonDerecha.addEventListener('click', () => {
  Background.scrollLeft += Background.offsetWidth +15 

})

/////////////////////////////////////////////////////

window.addEventListener('scroll', () => {

  if (window.scrollY > 47) {
    stickyHeader.classList.add('sticky')
  } else {
    stickyHeader.classList.remove('sticky')

  }


})