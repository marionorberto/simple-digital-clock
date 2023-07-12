const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');



function setTime(){
    const data = new Date();
    setInterval(function(){
        hour.innerText = (data.getHours() < 10) ? `0${data.getHours()}`: data.getHours();
        minute.innerText = (data.getMinutes() < 10) ? `0${data.getMinutes()}` : data.getMinutes();
        second.innerText = (data.getSeconds() < 10) ? `0${data.getSeconds()}` : data.getSeconds();
    },1000); 
}

setTime();