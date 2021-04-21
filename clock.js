setInterval(function(){
    var currentTime = new Date();
    var datee =currentTime.getDate();
    var month =currentTime.getMonth();
    var year= currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var Period = "AM";
    if (hours >=12){
        Period="PM";
    }
    if(hours>12){
        hours=hours-12;
    }
    if (seconds<10) {
        seconds ="0" + seconds;
    }
    if (minutes <10){
        minutes="0" + minutes;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + Period;
    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
    var calender =document.getElementById('calender');
    calender.innerText = datee + "/" + month + "/" + year;
},1000);