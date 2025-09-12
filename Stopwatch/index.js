let timer=document.getElementById('time')
let startTimer=document.getElementById('start')
let stopTimer=document.getElementById('stop')
let resetTimer=document.getElementById('reset')


let seconds=0;
let interValid=null;

const formatTime=(sec)=>{
    const hour=Math.floor(sec/360)
const minutes=Math.floor(sec/60);
const seconds=sec%60;
return `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
}

startTimer.onclick=()=>{
    interValid=setInterval(()=>{
        seconds++
        timer.textContent=formatTime(seconds)
    },1000)
}

stopTimer.onclick=()=>{
    clearInterval(interValid)
    interValid=null

}

resetTimer.onclick=()=>{
    clearInterval(interValid)
    interValid=null
    seconds=0;
    timer.textContent=formatTime(seconds)
}