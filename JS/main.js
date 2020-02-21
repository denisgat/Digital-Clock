let time = document.getElementById("clock");
const inputHours = document.getElementById('hours');
const inputMinutes = document.getElementById('minutes');
const inputSeconds = document.getElementById('seconds');



if(inputHours.value !== '') {
    const  inputHours = inputHours.value;
    
}
console.log(inputHours, inputMinutes, inputSeconds);

function ftime(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDay();
    
    let future = new Date(year,month,20,23,05,0);
    let lapse = now - future;
    
    let seconds = Math.floor(-lapse/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    
    
    if (hours > 24){
        hours = (hours - 24);
    }
    
    if (minutes > 59){
        minutes = (minutes - hours * 60);
    }
    
    if (seconds > 59){
        seconds = (seconds - minutes*(60));
    }
    
    if (seconds <= 0 && minutes <= 0 && hours <= 0 ){  
        clearInterval(finale);
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

    time.innerHTML = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    
    // console.log(hours, minutes, seconds)

    
}

var finale = setInterval(ftime,1000);

   













  
