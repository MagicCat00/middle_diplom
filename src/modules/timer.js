const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
 
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)


        return { timeRemaining, days, hours, minutes, seconds }
    }
    //countTimer('22 february 2022')

    const updateClock = () => {
        let getTime = getTimeRemaining()
        
        timerDays.textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;
        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000)
        }
        
    }
    updateClock()
    
}

export default timer