const countTimer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        let timer = getTimeRemaining();
        for (let key in timer) {
            if (timer[key] < 0) {
                timer[key] = '00';
            } else {
                timer[key] = beginZero(timer[key]);
            }
        }

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    };

    const beginZero = (amount) => {
        if (amount < 10 && amount >= 0) {
            amount = '0' + amount;
        }
        return amount;
    };

    updateClock();

};

export default countTimer;