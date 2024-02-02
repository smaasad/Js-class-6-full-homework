


setInterval(function(){
let date = new Date();

let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let am = document.querySelector('#am');


let hours_now = date.getHours();
let min_now = date.getMinutes();
let sec_now = date.getSeconds();

hour.innerText = hours_now > 12 ? hours_now - 12 : hours_now;
hour.innerText = hours_now < 10 ? "0" + hours_now : hours_now;
am.innerText = hours_now > 12 ? "pm" : "am";
min.innerText = min_now < 10 ? "0" + min_now : min_now;
sec.innerText = sec_now < 10 ? "0" + sec_now : sec_now;

},1000);


// light and Dark mode


if(localStorage.getItem('mode') === 'dark'){
    document.documentElement.classList.add("dark");
    document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-moon"></i>'
}
document.querySelector("#btn").addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
        document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-sun"></i>'
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("mode");
    } else {
        document.documentElement.classList.add("dark");
        document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.setItem("mode", "dark");
    }
});





// ANALOG CLOCK

let hr = document.getElementById('ahour');
let min = document.getElementById('amin');
let sec = document.getElementById('asec');


function displayTime(){
    let date = new Date();


    //getting hours,mins,secs from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000)



// Stopwatch

window.onload = function(){
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let interval;


    const startTimer = () => {
        tens++
        if(tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        };
        if(tens > 99){
            seconds++
            appendSeconds.innerHTML = '0'+ seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        };
        if(seconds > 9){
            appendSeconds.innerHTML = seconds
        };
        if(seconds > 59){
            minutes++
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        };

    };

    startBtn.onclick =() => {
        clearInterval(interval);
        Interval = setInterval(startTimer, 10);
    };
    stopBtn.onclick =() =>{
        clearInterval(interval);
    };

    resetBtn.onclick = () =>{
        clearInterval(interval);
        tens = '00'
        seconds = '00'
        minutes = '00'
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    };

};