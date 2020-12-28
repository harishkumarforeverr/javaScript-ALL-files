
function f1()
{
    var time="00:00:02";
    var body1=document.getElementById("timmer");
    body1.innerHTML=time;  
    body1.style.textAlign="center";
    var tc=setInterval(function() {
        var hr=0,min=0,sex=0; 
        var boolen=false;
        t=time.split(":");
        hr=parseInt(t[0]);
        min=parseInt(t[1]);
        sec=parseInt(t[2]);
        console.log("hr:"+hr+" min:"+min+" sec:"+sec);
        if(sec==0)
        {
            if(min>0)
            {
                sec=59;
                min--;
                console.log("im sec==0 () hr:"+hr+" min:"+min+" sec:"+sec);
            }
            else if(hr>0)
            {
                min=59;
                sec=59;
                hr--;
            }
            else
            {
                boolen=true;
            }
         }
        else
        {
            sec--;
            console.log("im else () hr:"+hr+" min:"+min+" sec:"+sec);

         }
        if(hr<10)
        hr="0"+hr;
        if(min<10)
        min="0"+min;
        if(sec<10)
        sec="0"+sec;
    var body2=document.getElementById("timmer");
        if(boolen)
        {
            var body4=document.getElementById("timmer");
            time="Time-up";
             clearInterval(tc);
        }
 
        console.log("im output () hr:"+hr+" min:"+min+" sec:"+sec);
        body2.innerHTML=(hr+":"+min+":"+sec);
        time=(hr+":"+min+":"+sec);
        
    },1000);
}