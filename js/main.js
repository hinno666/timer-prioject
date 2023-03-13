let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let reload;
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const reloadButton = document.querySelector('.reload');



function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }else if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    document.querySelector('#hours').innerHTML = getZero(hours);
    document.querySelector('#minutes').innerHTML = getZero(minutes);
    document.querySelector('#seconds').innerHTML = getZero(seconds);
    }, 1000);   
}


function stopTimer() {
    clearInterval(timer);
}


function reloadTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(timer);
    document.querySelector("#hours").innerHTML = "00";
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";
}


 function getZero(num) {
   if (num >= 0 && num < 10) {
     return `0${num}`;
   } else {
     return num;
   }
 }

startButton.addEventListener('click', (e) => {
    startButton.disabled = true;

      startButton.style.color = "greenyellow";
      stopButton.style.color = "rgb(104, 17, 17)";
      reloadButton.style.color = "rgb(148, 148, 83)";

    startTimer();
});


reloadButton.addEventListener('click', (e) => {
    startButton.disabled = false;

    reloadButton.style.color = "yellow";
    startButton.style.color = "rgb(65, 126, 65)";
    stopButton.style.color = "rgb(104, 17, 17)";
    reloadTimer();
});

stopButton.addEventListener('click', (e) => {
    startButton.disabled = false;

      stopButton.style.color = "red";
      startButton.style.color = "rgb(65, 126, 65)";
      reloadButton.style.color = "rgb(148, 148, 83)";

    stopTimer();
});



