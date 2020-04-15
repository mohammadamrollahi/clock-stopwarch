let wh
let myClock
document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false })
myClock=setInterval(()=> {
       document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false });wh=false}
,1000)

function buttonEvent()
{
if(!wh)
{
clearInterval(myClock)
document.getElementById('clock').innerText = new Date().toLocaleTimeString()
myClock=setInterval(()=> {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();wh=true}
,1000)

}
else if(wh)
{
    clearInterval(myClock)
    document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false })
    myClock=setInterval(()=> {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false });wh=false}
 ,1000)
}
}




function stopwatch()
{
    document.getElementById("clock").style.display="none"
    document.getElementById("clock2").style.display="unset"
    document.getElementById("default-button").style.display="none"
    document.getElementById("default-button2").style.display="none"
    document.getElementById("default-button3").style.display="none"
    document.getElementById("start-button").style.display="unset"
    document.getElementById("back-button").style.display="unset"


}
let startinterval;
let y=-12600000
function startStopWatch()
{
  

    startinterval=setInterval(()=> {
        y+=1000
        document.getElementById('clock2').innerText =new Date(y).toLocaleTimeString('de-DE', { hour12: false });
    }
 ,1000)
 document.getElementById("lap-button").style.display="unset"
 document.getElementById("pause-button").style.display="unset"
 document.getElementById("stop-button").style.display="unset"
 document.getElementById("start-button").style.display="none"
 document.getElementById("back-button").style.display="none"
}
function backButton()
{
    document.getElementById("clock").style.display="unset"
    document.getElementById("clock2").style.display="none"
    document.getElementById("default-button").style.display="unset"
    document.getElementById("default-button2").style.display="unset"
    document.getElementById("default-button3").style.display="unset"
    document.getElementById("start-button").style.display="none"
    document.getElementById("back-button").style.display="none"
}
function pauseStopWatch()
{
    if(document.getElementById("pause-button").innerHTML=="pause" && document.getElementById("stop-button").innerHTML=="stop")
    {
clearInterval(startinterval)
document.getElementById("pause-button").innerHTML="resume"
    }
else if(document.getElementById("pause-button").innerHTML=="resume")
{
    startinterval=setInterval(()=> {
        y+=1000
        document.getElementById('clock2').innerText =new Date(y).toLocaleTimeString('de-DE', { hour12: false });
    }
 ,1000)
document.getElementById("pause-button").innerHTML="pause"
}
}

function stopStopWatch()
{
    if(document.getElementById("stop-button").innerHTML=="stop" )
    {
    clearInterval(startinterval)
    document.getElementById('clock2').innerText ="00:00:00"
    document.getElementById("stop-button").innerHTML="start"
    y=-12600000
    document.getElementById("pause-button").innerHTML="pause"

    }
    else if(document.getElementById("stop-button").innerHTML=="start")
    {
        startinterval=setInterval(()=> {
            y+=1000
            document.getElementById('clock2').innerText =new Date(y).toLocaleTimeString('de-DE', { hour12: false });
        }
     ,1000)
     document.getElementById("stop-button").innerHTML="stop"
    }
}
