let bg=document.getElementById("bodyColor")

let color=['red','green','blue','pink','yellow','black','pink','orange','golden','teal']

const handleChange=()=>{

    let randomColors=color[Math.floor(Math.random()*color.length)]
    bg.style.backgroundColor=randomColors;

}