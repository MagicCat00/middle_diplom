const modal = () => {
    const modal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const buttons = document.querySelectorAll('.service-btn')
    const closeBtn = modal.querySelector('.services-modal__close')

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

export default modal