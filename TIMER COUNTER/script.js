
function formatTimeLeft() {

   
     
    // The largest round integer less than or equal to the result of time divided being by 60.
    let  minutes = document.getElementById("time_in_minutes").value;
    var len = minutes.length;
    for(var i =0;i<len;i++)
    { if(minutes[i]=='.' )
    {
        alert("PLease Enter the Positive Integer");
    document.getElementById("start").disabled = false;
        return;
    }
    if(minutes[i]=='E' )
    {
        alert("PLease Enter the Positive Integer");
    document.getElementById("start").disabled = false;
        return;
    }
    if(minutes[i]=='-' )
    {
        alert("PLease Enter the Positive Integer");
    document.getElementById("start").disabled = false;
        return;
    }
    }

    
    document.getElementById("start").disabled = true;
    
    console.log(minutes);
    if (minutes==0)
    { alert("PLease Enter the value greater than 0");
    document.getElementById("start").disabled = false;
        return;
    }
    if(minutes>60)
    {
        alert("PLease Enter the value less than 60");
        document.getElementById("start").disabled = false;
        return;
    }
    minutes = minutes -1;
    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = 60;
    let timeInterval = setInterval(() => {
        
        seconds = seconds-1;
        sec = String(seconds);
        min = String(minutes);
        if(minutes<10 && minutes>=0)
        {
            min = "0"+String(minutes);
            
        }
        if(seconds == 0 && minutes == 0)

        {
     document.getElementById("start").disabled = false;
        document.getElementById("alarm").autoplay= true;
        document.getElementById("alarm").volume = 0.1;
        clearInterval(timeInterval);

        }
        if(seconds<10 && seconds>=0)
        {
            sec = "0"+String(seconds);
            
        }
        if(seconds == 00)
        {
        seconds = 60;
        minutes = minutes - 1;

        }
        if(minutes<10 && minutes>=0)
        {
            min = "0"+String(minutes);
            
        }
      
        document.getElementById("time").innerHTML = min+":"+sec;
        minutesremaining(seconds,minutes);
    }, 1000);


    
}

    
  
