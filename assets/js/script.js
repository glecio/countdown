const year = 2024
/* 0=January 1=Febuary ... 11=december */
const month = 0
const day = 1
const hour = 0
const minute = 0
const second = 0
const milissecond = 00


function countDown() {
    const today = new Date()
    const targetDate = new Date(year, month, day, hour, minute, second, milissecond)
    //const targetDate = new Date('25, Sep 2023')
    const totalSeconds = (targetDate - today) / 1000

    const months = Math.floor(totalSeconds / 3600 / 24 / 30);
    const days = Math.floor(totalSeconds / 3600 / 24) % 30
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    const monthsElement = document.getElementById('months')
    const daysElement = document.getElementById('days')
    const hoursElement = document.getElementById('hours')
    const minutesElement = document.getElementById('minutes')
    const secondsElement = document.getElementById('seconds')

    monthsElement.innerHTML = months
    daysElement.innerHTML = days
    hoursElement.innerHTML = hours
    minutesElement.innerHTML = formatTime(minutes)
    secondsElement.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);