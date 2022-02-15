const slider_services = () => {
    //slider_content - все слайды
    //slider_block - слайды по отдельности
    //slider_block--active - видно
    //slider_block - скрыто

   const sliderBlock = document.querySelector('.slider_content')
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
        setInterval(autoSlide, 5000)
   }

   const stopSlide = () => {

   }

   sliderBlock.addEventListener('click', (e) => {
       e.preventDefault()
       
       if (e.target.matches('#arrow-right')) {
            console.log('arrow-right');
       } else if (e.target.matches('#arrow-left')) {
        console.log('arrow-left');
       } 
   })

   startSlide()
}

export default slider_services