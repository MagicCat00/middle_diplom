const scrolls = document.querySelectorAll('a[href*="#home"]')

for (let scroll of scrolls) {
    scroll.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = scroll.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


export default scroll
