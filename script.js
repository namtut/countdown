$(function(){
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    var totalSecond;
    function formatTime(t){
        return t < 10 ? `0${t}` : t;
    }

    function countdown(){
        const hours = Math.floor(totalSecond/3600)%24;
        const minutes= Math.floor(totalSecond/60)%60;
        const seconds = Math.floor(totalSecond)%60;
        totalSecond = totalSecond-1;
        if(totalSecond<=3598){
            $('.hours-container').css('display', 'none'); 
            $('#disappear').css('display', 'none');           
        }

        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = formatTime( minutes);
        secondsEl.innerHTML= formatTime(seconds);
        
    
    }

    $('#start').click(function(){
        var time = $('#timing').val();
        console.log(time);
        $('h1 span').text(time);
        totalSecond = time*60; 
        countdown();
        t=setInterval(countdown, 1000); 
        $('#start').css('display', 'none');
        $('#timing').css('display', 'none');
    });
    
    $('#stop').click(function(){
        clearInterval(t); 
        $('#continue').css('display', 'block');
        $('#start').css('display', 'none');
        $('#stop').css('display', 'none');
    });
    
    $('#continue').click(function(){
        countdown();
        t=setInterval(countdown, 1000); 
        $('#continue').css('display', 'none');
        $('#stop').css('display', 'block');
    });

    
    //current time 
    var showCurrentTime = function()
    {
        var currentTime = new Date();
        var clockTime = formatTime(currentTime.getHours()%12) + '     :     ' + formatTime(currentTime.getMinutes());
        document.getElementById('clock').innerText = clockTime;
    };

    showCurrentTime();
    setInterval(showCurrentTime, 1000);


    //finish
    


    


});