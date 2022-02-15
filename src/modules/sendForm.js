//name="fio" - ваше имя
//name="phone" - ваш телефон

const sendForm = ({ formId }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!'

    //валидация
    const validate = (list) => {
        let success = true

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        console.log('submit');

        //очистка value и сообщения
        if (validate(formElements)) {
            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText

                formElements.forEach(input => {
                    input.value = ''
                })
             })
             .catch(error => {
                statusBlock.textContent = errorText
             })
        } else {
            alert('Данные не валидны')
        }
        
        
    })
}



export default sendForm