const year = 2023
const month = 7
const day = 24
const hour = 0
const minute = 0
const second = 0
const milissecond = 00

function countDown() {
    const today = new Date()
    const targetDate = new Date(year, month, day, hour, minute, second, milissecond)
    const totalSeconds = (targetDate - today) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60


    const daysElement = document.getElementById('days')
    const hoursElement = document.getElementById('hours')
    const minutesElement = document.getElementById('minutes')
    const secondsElement = document.getElementById('seconds')
    daysElement.innerHTML = days
    hoursElement.innerHTML = hours
    minutesElement.innerHTML = formatTime(minutes)
    secondsElement.innerHTML = formatTime(seconds)
    console.log(targetDate)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);