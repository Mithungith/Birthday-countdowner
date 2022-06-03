
    const daysEl=document.getElementById('days');
    const hoursEl=document.getElementById('hours');
    const minutesEl=document.getElementById('minutes');
    const secondsEl=document.getElementById('seconds');
function countDown(){
    var birthDate=new Date('25 august 2022');
    var currentDate=new Date();
    const miliSecondRemains=(birthDate-currentDate);
    const secondRemains=(miliSecondRemains/1000);
    const day=Math.floor((secondRemains/3600)/24);
    const hour=Math.floor((secondRemains/3600)%24);
    const min=Math.floor((secondRemains/60)%60);
    const sec=Math.floor(secondRemains%60);
    daysEl.innerHTML=day;
    hoursEl.innerHTML=formatTime(hour);
    minutesEl.innerHTML=formatTime(min);
    secondsEl.innerHTML=formatTime(sec);
    //console.log(miliSecondRemains);
    }
function formatTime(time){
   return time<10?'0'+time:time;
}
    
countDown();
setInterval(countDown,1000);
