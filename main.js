var hoursE1 = document.getElementById(hours)
var minutesE1 = document.getElementById(minutes)
var secondsE1 = document.getElementById(seconds)

function countdownTimer() {
    const countDownDate = new Date('104/18/2024').getTime()
    const second = 1000
    const minute = second * 60
    const hour = minute * 60

const interval = setInterval(() => {

}, 1000);

   const now = new Date().getTime()
   const distance = countDownDate - now
        hoursE1.innertext = formatNumber(math.floor(distance / hour))
    minutesE1.innertext = formatNumber(math.floor((distance % hour)/ minute)
    )
    seconds.innertext = formatNumber (math.floor((distance % minute)/ second))
}

function formatNumber(number) {
    if(number < 10 ) {
        return '0' + number
    }
}

countdownTimer()