let time = document.getElementById("clock");


function ftime(){
    let now = new Date()
    let hours = now.getHours() ;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    time.innerHTML = hours + ":"  + minutes + ":" + seconds
    return hours 
    return minutes
    return seconds
}

setInterval(ftime,1000);



    
