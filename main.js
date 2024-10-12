var stoper;
var hrs=document.getElementById("hrs")
var mins=document.getElementById("mins")
var secs=document.getElementById("secs")
function start()
{
    stoper=setInterval(function()
{
    if(secs.innerText<9)
      secs.innerText="0"+(parseInt(secs.innerText)+1);
    else
      secs.innerText=parseInt(secs.innerText)+1;
   if(secs.innerText==100)
   {
     secs.innerText=0;
     if(mins.innerText<9)
      mins.innerText="0"+(parseInt(mins.innerText)+1);
    else
      mins.innerText=parseInt(mins.innerText)+1;
   }
   
   if(mins.innerText==60)
   {
     mins.innerText=0;
     if(hrs.innerText<9)
      hrs.innerText="0"+(parseInt(hrs.innerText)+1);
    else
      hrs.innerText=parseInt(hrs.innerText)+1;
   }
 },0.98)
}
function stop() 
{
  clearInterval(stoper);
}
function reset()
{
  hrs.innerText="00"
  mins.innerText="00"
  secs.innerText="00"
  document.getElementById("lapCounter").innerHTML = '<h2>Laps:</h2>'; 
  stop()
}
function lap()
{
  var para=document.createElement("p");
  para.innerText=hrs.innerText+":"+mins.innerText+":"+secs.innerText;
  para.style.color="white";
  para.style.marginTop="70px"
  document.getElementById("lapCounter").appendChild(para)
}