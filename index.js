window.onload = function () {
    var ten = 00;
    var sec = 00;
    var color=document.getElementById('color_change');
    let a_sec = document.getElementById('minute');
    let a_ten = document.getElementById('second');
    let btn_start = document.getElementById('start');
    let btn_stop = document.getElementById('stop');
    let btn_reset = document.getElementById('reset');
    var interval;
    btn_start.onclick = function () {
        clearInterval(interval)
        interval = setInterval(startTimer, 10);
        a_sec.style="color:#17D4FE;";
        a_ten.style="color:#17D4FE;";
        color.style="color:#17D4FE;";


    }
    btn_stop.onclick = function () {
        a_sec.style="color:white;";
        a_ten.style="color:white;";
        color.style="color:white;";
        clearInterval(interval);

    }
    btn_reset.onclick = function () {
        a_sec.style="color:white;";
        a_ten.style="color:white;";
        color.style="color:white;";
        clearInterval(interval);
        ten = "00";
        sec = "00";
        a_sec.innerHTML = sec;
        a_ten.innerHTML = ten;

    }
   
  function startTimer () {
    ten++; 
    
    if(ten <= 9){
      a_ten.innerHTML = "0" + ten;
    }
    
    if (ten > 9){
      a_ten.innerHTML = ten;
      
    } 
    
    if (ten > 99) {
      console.log("seconds");
      sec++;
      a_sec.innerHTML = "0" + sec;
      ten = 0;
      a_ten.innerHTML = "0" + 0;
    }
    
    if (sec > 9){
      a_sec.innerHTML = sec;
    }
  
  }
  
}
