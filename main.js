var hoursE1 = document.getElementById(hours)
var minutesE1 = document.getElementById(minutes)
var secondsE1 = document.getElementById(seconds)

function countdownTimer() {
    hoursE1.innertext = 5
    minutesE1.innertext = 5
    seconds.innertext = 5
}

function formatNumber(number) {
    if(number < 10 ) {
        return '0' + number
    }
}

countdownTimer()