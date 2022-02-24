const slider_services = () => {

    //slider_block--active - видно
    //slider_block - скрыто

   const sliderBlock = document.querySelector('#services')
   const slides = document.querySelectorAll('.slider_block')

   let currentSlide = 0


   const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
   }

   const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
   }


   const autoSlide = () => {
    prevSlide(slides, currentSlide, 'slider_block--active')
    currentSlide++

    if (currentSlide >= slides.length) {
        currentSlide = 0
    }

    nextSlide(slides, currentSlide, 'slider_block--active')
   }

   const startSlide = () => {
        
   }

   const stopSlide = () => {

   }
   sliderBlock.addEventListener('click', (e) => {
       e.preventDefault()

       if (!e.target.closest('.services__arrow')) {
           return
       }

       prevSlide(slides, currentSlide, 'slider_block--active')
       if (e.target.closest('#arrow-right')) {
            currentSlide++
       } else if (e.target.closest('#arrow-left')) {
            currentSlide--
       } 

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0 ) {
            currentSlide = slides.length - 1
        }

       nextSlide(slides, currentSlide, 'slider_block--active')
   })

   startSlide()
}

export default slider_services