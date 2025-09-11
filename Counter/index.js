let manageCounter=0;

const handleInc = () => {
  
    manageCounter = manageCounter + 1;
    document.getElementById('counter').textContent = manageCounter;
  
};

const handleDec=()=>{
    if(manageCounter>0){
    manageCounter=manageCounter-1
    document.getElementById('counter').textContent=manageCounter;
    }
    
}
const handleReset=()=>{
    manageCounter=0;
    document.getElementById('counter').textContent=manageCounter;
    
}