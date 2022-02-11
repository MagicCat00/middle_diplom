const modal_menu = () => {
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const buttons = document.querySelectorAll('.menu_button')
    const closeBtn = modal.querySelector('.header-modal__close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block',
            overlay.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none',
        overlay.style.display = 'none'
    })
}

export default modal_menu