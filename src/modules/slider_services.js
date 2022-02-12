const slider_services = () => {
    //slider_content - все слайды
    //slider_block - слайды по отдельности
    //slider_block--active - видно
    //slider_block - скрыто

   const sliderBlock = document.querySelector('.slider_content')
   const slides = document.querySelector('.slider_block')

   console.log(sliderBlock);

   let currentSlide = 0

   const autoSlide = () => {
    slides[currentSlide].classList.remove('slider_block--active')
    currentSlide++
    slides[currentSlide].classList.add('slider_block--active')
   }

   const startSlide = () => {
        
   }

   const stopSlide = () => {

   }

   startSlide()
}

export default slider_services