let time = document.getElementById("clock");
let future = new Date(2020,01,20,20,39,0);

function ftime(){
    let now = new Date();
    let lapse = now - future
    
    let seconds = Math.floor(-lapse/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    
    
    if (hours > 24){
        hours = (hours - 24);
    }
    
    if (minutes > 60){
        minutes = (minutes - hours * 60);
    }
    
    if (seconds > 60){
        seconds = (seconds - minutes*(60));
    }
    
    if (seconds <= 0 && minutes <= 0 && hours <= 0 ){  
        clearInterval(finale);
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

    time.innerHTML = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    
    console.log(hours, minutes, seconds)
    
}

var finale = setInterval(ftime,1000);

   













  
