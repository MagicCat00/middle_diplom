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

   //отображение 2 карточек
    const getToSlide = (sliderBlock) => {
        const allSlides = document.querySelectorAll(`.${sliderBlock.id}_item`);
    
            let slides = []
            let slide1 = []
            let slide2 = []

            allSlides.forEach(slide => {
                if (slide.classList.contains('slider_block')) {
                    slide1.push(slide)
                } else slide2.push(slide)
            })
            slides.push(slide1)
            slides.push(slide2)
            return {slides}
    }

   //переключение по стрелочкам
   sliderBlock.addEventListener('click', (e) => {
       e.preventDefault()
       getToSlide(sliderBlock);

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
}

export default slider_services