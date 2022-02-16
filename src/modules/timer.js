const timer = (deadline) => {
    const timerBlocks = document.querySelectorAll('.count-wrap')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        return {timeRemaining, days, hours, minutes, seconds}
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerBlocks.forEach(timerBlock => {
            const timerDays = timerBlock.querySelector('#timer-days')
            const timerHours = timerBlock.querySelector('#timer-hours')
            const timerMinutes = timerBlock.querySelector('#timer-minutes')
            const timerSeconds = timerBlock.querySelector('#timer-seconds') 

            timerDays.textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;
            timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
            timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
            timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;

            if (getTime.timeRemaining > 0) {
                setTimeout(updateClock, 1000)
            }
        })

    }


    updateClock()
}

export default timer