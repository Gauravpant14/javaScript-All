setInterval(showTime, 1000);
function showTime() {
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var d = (new Date()).toString().split(' ').splice(1,3).join(' ');

  var am_pm = "am"
   
  if (sec < 10){
    sec = "0" + sec;
  }
  if (min < 10){
    min = "0" + min;
  }
  

  if(hour >= 12){
      hour = hour % 12;
       am_pm = "pm"; 
    }

    if (hour <= 10){
      hour = "0" + hour;
    }
  var clock = document.querySelector(".clock");
  clock.innerHTML = `${d} , ${hour} : ${min} : ${sec} ${am_pm}`;
   
  
}
