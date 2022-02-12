const sendForm = (idForm) => {
    const form = document.getElementById(idForm)

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        console.log('submit');

        sendData({}).then(data => {
            console.log(data);
        })
    })
}

export default sendForm