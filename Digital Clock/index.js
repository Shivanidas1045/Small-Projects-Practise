let el=document.getElementById("clock")

function tick(){
let currentTime=new Date()
let h=String(currentTime.getHours()).padStart(2,"0")
let m =String(currentTime.getMinutes()).padStart(2,"0")
let s=String(currentTime.getSeconds()).padStart(2,"0")

el.textContent=`${h}:${m}:${s}`

}
tick()

setInterval(tick,1000)