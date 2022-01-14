window.onload = function () {
    var sec = 00;
    var min = 00;
    var color=document.getElementById('color_change');
    let a_minute = document.getElementById('minute');
    let a_sec = document.getElementById('second');
    let btn_start = document.getElementById('start');
    let btn_stop = document.getElementById('stop');
    let btn_reset = document.getElementById('reset');
    var interval;
    btn_start.onclick = function () {
        clearInterval(interval)
        interval = setInterval(startTimer, 10);
        a_minute.style="color:#17D4FE;";
        a_sec.style="color:#17D4FE;";
        color.style="color:#17D4FE;";


    }
    btn_stop.onclick = function () {
        a_minute.style="color:white;";
        a_sec.style="color:white;";
        color.style="color:white;";
        clearInterval(interval);

    }
    btn_reset.onclick = function () {
        a_minute.style="color:white;";
        a_sec.style="color:white;";
        color.style="color:white;";
        clearInterval(interval);
        sec = "00";
        min = "00";
        a_minute.innerHTML = min;
        a_sec.innerHTML = sec;

    }
   
  function startTimer () {
    sec++; 
    
    if(sec <= 9){
      a_sec.innerHTML = "0" + sec;
    }
    
    if (sec > 9){
      a_sec.innerHTML = sec;
      
    } 
    
    if (sec > 99) {
      console.log("seconds");
      min++;
      a_minute.innerHTML = "0" + min;
      sec = 0;
      a_sec.innerHTML = "0" + 0;
    }
    
    if (min > 9){
      a_minute.innerHTML = min;
    }
  
  }
  
}
