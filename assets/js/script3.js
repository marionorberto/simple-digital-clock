let flag = false;
const newAlarm = document.querySelector('.new-Alarm');
newAlarm.style = 'display: none';

class Alarme {
    constructor(){
        this.time = document.querySelector('.time');
        this.containerSaveAlarms = document.querySelector('.container-save-alarms');
        this.nameAlarme = document.querySelector('.input-alarme');
        this.selectRepeat = document.querySelector('.input-repetir');
        this.save = document.querySelector('.save');
        this.cancel = document.querySelector('.cancel');
        this.song = document.querySelector('.song');
        this.interval = document.querySelector('.interval');
        this.add = document.querySelector('.add');
        this.pencil = document.querySelector('.pencil');
        this.nameAlarme.value = 'Alarme(1)';
        this.selectedDays = [];
        
    }
    execute(){
        document.addEventListener('click',(event)=>{
            const elem = event.target;
       
            if(elem.classList.contains('add')){
                this.hiddeSaveAlarms();
                newAlarm.style = 'display: flex';
            }
            if(elem.classList.contains('cancel')){
                this.cancelAlarm();
            }
            if(elem.classList.contains('save')){
                this.saveAlarm();
            }
            if(elem.parentNode.tagName.toLowerCase() === 'ul'){
                this.selectDays(elem);
            }
        });
        this.getLocalTime();  
    }
    selectDays(elem){
        elem.classList.add('diaMarcado');
        this.selectedDays.push(elem.innerHTML);
    }
    cancelAlarm(){
        this.nameAlarme.value = 'Alarme(1)'
        this.time.value = '12:00'; 
        this.song.value = 'noisy';
        this.interval.value = '10 min';
        newAlarm.style = 'display: none';
        this.showSaveAlarms();
    }
    getLocalTime(){
        let time;
        setInterval(()=>{
            const data = new Date();
            time = data.toLocaleTimeString().slice(0, -3);
            time = String(time);
            flag = (time === this.time.value) ? true:false;
            this.playAlarm(flag);
        },1000);
    }
    saveAlarm(){
        alert('alarme salvo');
    }
    playAlarm(flag){
        if(!flag) return;
        console.log('tocando...');
    }
    createSavesAlarms(){
        const div = document.createElement('div');
       
        this.containerSaveAlarms.appendChild(div)

    }
    hiddeSaveAlarms(){
        const saveAlarms = document.querySelector('.s-v-single');
        saveAlarms.style = 'display: none';
    }
    showSaveAlarms(){
        const saveAlarms = document.querySelector('.s-v-single');
        saveAlarms.style = 'display: block';
    }
}

const alarme = new Alarme();
alarme.execute();
