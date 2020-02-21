let time = document.getElementById("clock");

function ftime(){
    let now = new Date();
    let hours = now.getHours() ;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    time.innerHTML = ("0" + hours).slice(-2) + ":"  + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)


}
 

   
var finale = setInterval(ftime,1000);













  
