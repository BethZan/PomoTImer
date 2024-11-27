var hoursE1 = document.getElementById("Hours")
var minutesE1 = document.getElementById("Minutes")
var secondsE1 = document.getElementById("Seconds")

function countdownTimer() {
    const countDownDate = new Date().getTime()
    const second = 1000
    const minute = second * 60
    const hour = minute * 60

    const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = now - countDownDate
        
        hoursE1.innerText = formatNumber(Math.floor(distance / hour))
        minutesE1.innerText = formatNumber(Math.floor((distance % hour) / minute))
        secondsE1.innerText = formatNumber(Math.floor((distance % minute) / second))
   
    }, 1000);

}

function formatNumber(number) {
    if (number < 10) {
        return '0' + number
    }
    return number
}

countdownTimer()