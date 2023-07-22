// //
const timer = document.querySelector('.timer');
const begin = document.querySelector('.begin');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let sec = 0;
let time;

document.addEventListener('click',(e)=>{
    const elem = e.target;

    if(elem.classList.contains('begin')){
        setBegin();
    }
    if(elem.classList.contains('stop')){
        setStop();
    }
    if(elem.classList.contains('reset')){
        setReset();
    }
});


// set time to display:
function setTime(sec){
    const data =  new Date(sec*1000);
    return data.toLocaleTimeString();
}
// initialize the timer:
function setBegin(){
   clearInterval(time);
   timer.classList.remove('pause');
  time =  setInterval(()=>{
        timer.innerHTML = setTime(sec);
        sec++;
    },1000);
}
//stop the timer:
function setStop(){
    timer.classList.add('pause');
    clearInterval(time);
}
//reset the timer:
function setReset(){
    sec = 0;
    timer.innerHTML = setTime(0);
    timer.classList.remove('pause');
}
